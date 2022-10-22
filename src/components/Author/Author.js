import { graphql, Link, StaticQuery, withPrefix } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

import styles from './Author.module.scss';

export const PureAuthor = ({ author, showBio, showTwitter, small }) => {
  const photoSize = showBio ? 60 : small ? 40 : 48;

  return (
    <div className={styles['author']}>
      <div className={styles['author__header']}>
        <Link to="/" className={styles['author__header-photo']}>
          <StaticImage
            alt={author.name}
            src="./image/photo2.jpg"
            width={60}
            height={60}
          />
        </Link>
        <div className={styles['author__header-right']}>
          <h4 className={styles['author__header-right-name']}>
            <Link className={styles['author__header-right-name-link']} to="/" rel="author">
              {author.name}
            </Link>
            {showTwitter && ' '}
            {showTwitter && (
              <a
                style={{ fontWeight: 500 }}
                href="https://twitter.com/abidemikusimo"
                target="_blank"
                rel="noopener noreferrer"
              >
                @abidemikusimo
              </a>
            )}
          </h4>
          {showBio && (
            <p
              className={styles['author__header-right-bio']}
              dangerouslySetInnerHTML={{ __html: author.bio }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const Author = props => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
            }
          }
        }
      }
    `}
    render={data => <PureAuthor {...props} author={data.site.siteMetadata.author} />}
  />
);

export default Author;
