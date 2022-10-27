// @flow
import { graphql, Link } from 'gatsby';
import React from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { logEvent } from '../../../utils/log';
import styles from './ReadMore.module.scss';

type PostType = {
  +fields: {
    +dateFormatted: string,
    +dateModifiedFormatted?: string,
  },
  +frontmatter: {
    +description: string,
    +img: string,
    +slug: string,
    +title: string,
  },
};

type LinkProps = {|
  +post: PostType,
|};

type Props = {|
  +prevPost: PostType,
  +nextPost: PostType,
|};


const ReadMoreLink = ({
  post: {
    fields: { dateFormatted, dateModifiedFormatted },
    frontmatter: { description, img, featuredImage, slug, title },
  },
}: LinkProps) => (
  <div className={ slug === null ? styles['readmore-no-post'] : 'suggest' }>
    {slug !== null
    ? <Link
        to={slug}
        onClick={() => {
          logEvent('ReadMore', 'click');
        }}
      >
    {featuredImage !== null
    ? <GatsbyImage
      alt={title}
      className={styles['readmore-thumbnail']}
      placeholder="tracedSVG"
      image={ getImage(featuredImage)}
      />
    : ''}
    <div className={styles['body']}>
        <b>{title}</b>
      <p>
        <b>{dateModifiedFormatted || dateFormatted}</b>
      </p>
      <p className={styles['description']}>{description}</p>
    </div>
    </Link>
    : ''}

  </div>
);

const ReadMore = ({ prevPost, nextPost }: Props) => (
  <div className={styles['readmore']}>
    <h4 className={styles['readmore-title']}>YOU MIGHT ALSO LIKE</h4>
    <div className={styles['readmore-links']}>
      { prevPost !== null ? <ReadMoreLink post={prevPost} /> : ''}
      {nextPost !== null ? <ReadMoreLink post={nextPost} /> : ''}
    </div>
  </div>
);


export const fragment = graphql`
  fragment ReadMoreFragment on MarkdownRemark {
    fields {
      dateFormatted
      dateModifiedFormatted
    }
    frontmatter {
      description
      img
      featuredImage {
        childImageSharp {
          gatsbyImageData
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slug
      title
    }
  }
`;

export default ReadMore;
