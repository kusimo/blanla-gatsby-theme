import classNames from 'classnames/bind';
import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';

import styles from './PopularTags.module.scss';

const cx = classNames.bind(styles);

export const PureTag = ({ data, horizontal, bold, noMargin, location }) => {
  const { tags } = data.site.siteMetadata;
  const pathname = location ? location.pathname : '';
  return (
    <nav
      className={cx({
        tag: true,
        horizontal,
        'no-margin': noMargin,
      })}
    >
      <ul className={styles['tag__list']}>
        {tags.map(item => (
          <li className={styles['tag__list-item']} key={item.path}>
            <Link
              to={item.path}
              className={cx({
                'tag__list-item-link': true,
                bold,
                'tag__list-item-link--active':
                  (item.path === '/' &&
                    (pathname.startsWith('/top/') || pathname.startsWith('/page/'))) ||
                  (item.path === '/tags/' && pathname.startsWith('/tag/')),
              })}
              activeClassName={styles['tag__list-item-link--active']}
              partiallyActive={item.path !== '/'}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const PopularTags = props => (
  <StaticQuery
    query={graphql`
     query TagsQuery {
        site {
          siteMetadata {
            tags {
              label
              path
            }
          }
        }
      }
    `}
    render={data => <PureTag {...props} data={data} />}
  />
);

export default PopularTags;