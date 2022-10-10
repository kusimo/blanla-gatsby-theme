import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Logo = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title,
                description
                }
            } 
        }
    `);
    return (
        <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
    );
}

export default Logo;