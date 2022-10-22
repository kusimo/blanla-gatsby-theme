// @flow
import { graphql, Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Img from "gatsby-image"

import { logEvent } from '../../utils/log';
import GuestAuthor from '../GuestAuthor';
import styles from './Feed.module.scss';

type Props = {|
  +edges: Array<Object>,
  +shortened?: boolean,
|};

function onLinkClick() {
  logEvent(`Feed ${window.location.pathname}`, 'post-click');
}
let count = 0;

const Feed = ({ edges, shortened }: Props) => (
  <div className={styles['feed']}>
    {edges.map(edge => {
      const {
        fields: { categorySlug, slug, dateFormatted },
        frontmatter: {
          date,
          title,
          featuredImage,
          category,
          description,
          isSeries,
          guestAuthor,
          guestCoAuthor,
          guestAuthorLink,
        },
      } = edge.node;

      const image = edge.node.frontmatter.featuredImage;
      count++;

      return (
        <div className={styles['feed__item']} key={slug}>

          {image !== null ? 
          <Link className={styles['feed__item-title-link']} to={slug} onClick={onLinkClick}>
            <Img fluid={image.childImageSharp.fluid} 
            alt={title}
            fadeIn={false}
            className={styles['feed__item-feed-thumbnail']}
            loading={count < 3 ? 'eager' : 'lazy'}
          /> </Link>
          : ''}

         <div className={styles['feed__item-body']}>
          <h2 className={styles['feed__item-title']}>
              <Link className={styles['feed__item-title-link']} to={slug} onClick={onLinkClick}>
                {title}
              </Link>
            </h2>
            <div className={styles['feed__item-meta']}>
              <time className={styles['feed__item-meta-time']} dateTime={date}>
                {dateFormatted}
              </time>
              <span className={styles['feed__item-meta-divider']} />
              <span className={styles['feed__item-meta-category']}>
                <Link to={categorySlug} className={styles['feed__item-meta-category-link']}>
                  {category}
                </Link>
              </span>
            </div>
            <GuestAuthor author={guestAuthor} coAuthor={guestCoAuthor} link={guestAuthorLink} />
            {!shortened && (
              <>
                <p className={styles['feed__item-description']}>{description}</p>
                <Link className={styles['feed__item-readmore']} to={slug} onClick={onLinkClick}>
                  {isSeries ? 'View Series' : 'Read'}
                </Link>
              </>
            )}
         </div>
        </div>
      );
    })}
  </div>
);

export const fragment = graphql`
  fragment FeedFragment on MarkdownRemarkEdge {
    node {
      fields {
        categorySlug
        slug
        dateFormatted
      }
      frontmatter {
        date
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData
            fluid(maxWidth: 400, quality: 45) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        category
        description
        isSeries
        guestAuthor
        guestCoAuthor
        guestAuthorLink
      }
    }
  }
`;

export default Feed;
