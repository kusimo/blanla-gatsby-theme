// @flow

import { graphql, StaticQuery } from "gatsby"
import React from "react"

import styles from './Copyright.module.scss';

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              copyright
            }
          }
        }
      `}
      render={data => (
        <p className={styles['copyright']}>{data.site.siteMetadata.copyright}</p>
      )}
    />
  );
}
