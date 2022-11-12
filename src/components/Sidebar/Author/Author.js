import { Link, withPrefix } from 'gatsby';
import React from 'react';

import { StaticImage } from 'gatsby-plugin-image'

import styles from './Author.module.scss';


const Author = ({ author, location }) => (

  <div className={styles['author']}>
    <div className={styles['author__main-section']}>
      <>
        <StaticImage
            alt={author.name}
            src="../../Author/image/author-image.png"
            width={75}
            height={75}
            className={styles['author__photo']}
            loading="eager"
          />
      </>
      <div className={styles['author__title']}>
        <h3>
          {typeof location !== 'undefined' && !location.pathname.includes('/about/')
          ? <Link className={styles['author__title-link']} to="/about/">
          {author.name}
         </Link>
         : <div>
           {author.name}
         </div>
          }

        </h3>

      </div>
    </div>
    <p className={styles['author__subtitle']} dangerouslySetInnerHTML={{ __html: author.bio }} />
  </div>
);

export default Author;
