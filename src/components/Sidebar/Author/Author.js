import { Link, withPrefix } from 'gatsby';
import React from 'react';

import { StaticImage } from 'gatsby-plugin-image'

import styles from './Author.module.scss';

const Author = ({ author }) => (
  <div className={styles['author']}>
    <div className={styles['author__main-section']}>
      <Link to="/">
        <StaticImage
            alt={author.name}
            src="../../Author/image/author-image.png"
            width={75}
            height={75}
            className={styles['author__photo']}
            loading="eager"
          />
      </Link>
      <div className={styles['author__title']}>
        <h3>
          <Link className={styles['author__title-link']} to="/">
            {author.name}
          </Link>
        </h3>

      </div>
    </div>
    <p className={styles['author__subtitle']} dangerouslySetInnerHTML={{ __html: author.bio }} />
  </div>
);

export default Author;
