// @flow
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { useLocation } from '@reach/router'

import MovableSidebarContent from '../MovableSidebarContent';
import Author from './Author';
import styles from './Sidebar.module.scss';

type Props = {
  +hideSubscribeForm?: boolean,
  +hideAd?: boolean,
  +location?: Object,
};

type PureProps = Props & {
  +data: Object,
};


export const PureSidebar = ({ data, hideSubscribeForm, hideAd }: PureProps) => {
  
  const { author } = data.site.siteMetadata;
  const curentLocation = useLocation();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} location={curentLocation} />
        <MovableSidebarContent desktop hideSubscribeForm={hideSubscribeForm} hideAd={hideAd} />
      </div>
    </div>
  );
};

export const Sidebar = (props: Props) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            siteUrl
            url
            title
            author {
              name
              photo
              bio
            }
          }
        }
      }
    `}
    render={data => <PureSidebar {...props} data={data} />}
  />
);

export default Sidebar;
