// @flow
import loadable from '@loadable/component';
import { graphql } from 'gatsby';
import * as React from 'react';
import rehypeReact from 'rehype-react';

import ContentDate from '../ContentDate';
import GuestAuthor from '../GuestAuthor';
import styles from './Content.module.scss';

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'csrf-post-button': loadable(() => import('../CSRFPostButton')) },
  Fragment: React.Fragment,
}).Compiler;

type Props = {|
  +htmlAst: Object,
  +title: string,
  +img: string,
  +featuredImage: Object,
  +subtitle: ?string,
  +dateFormatted: string,
  +dateModifiedFormatted: ?string,
  +footer: ?React.Node,
  +guestAuthor: ?string,
  +guestCoAuthor?: ?boolean,
  +guestAuthorLink: ?string,
|};

const Content = ({
  htmlAst,
  title,
  img,
  featuredImage,
  subtitle,
  dateFormatted,
  dateModifiedFormatted,
  footer,
  guestAuthor,
  guestCoAuthor,
  guestAuthorLink,
}: Props) => (

  <article className={styles['content']}>
    <header className={`${featuredImage === null ? styles['content__header-no-image'] : styles['content__has-featured-image']}`}>
      {featuredImage === null ? ''
      : <GatsbyImage
        alt={title}
        className={styles['content__featured-image']}
        placeholder="tracedSVG"
        image={ getImage(featuredImage)}
        loading="eager"
        critical="true"
      />
      }
      <div className={styles['content__header-content']}>
        <h1 className={`${styles['content__title']} ${subtitle ? '' : styles['no-subtitle']}`}>
          {title}
        </h1>
        {subtitle && <h2 className={styles['content__subtitle']}>{subtitle}</h2>}
        <div className={styles['content__date']}>
          <ContentDate dateFormatted={dateFormatted} dateModifiedFormatted={dateModifiedFormatted} />
        </div>
        {(!!guestAuthor || !!guestCoAuthor) && (
          <div className={styles['content__guest-author']}>
            <GuestAuthor author={guestAuthor} coAuthor={guestCoAuthor} link={guestAuthorLink} />
          </div>
        )}
      </div>
      
    </header>
     
    <div className={styles['content__spacer']} />
    <div className={styles['content__body']}>{renderAst(htmlAst)}</div>
    {footer}
  </article>

);



export const fragment = graphql`
  fragment ContentFragment on MarkdownRemark {
    htmlAst
    fields {
      ...ContentDateFragment
    }
    frontmatter {
      ...GuestAuthorFragment
    }
  }
`;

export default Content;
