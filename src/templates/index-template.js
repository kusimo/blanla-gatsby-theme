// @flow
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Feed from '../components/Feed';
import Layout from '../components/Layout'; 
import NavHeader from '../components/NavHeader';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SortBySelector from '../components/SortBySelector';
import TemplateWrapper from '../components/TemplateWrapper';
import { postPagePath, topPostsPagePath } from '../utils/page-paths';

type Props = {|
  +data: Object,
  +pageContext: Object,
  +location: Object,
|};

const IndexTemplate = ({ data, pageContext, location }: Props) => {
  const { author, title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const { currentPage, hasNextPage, hasPrevPage, numPages, postSlugs, sortByNew } = pageContext;

  let { edges } = data.allMarkdownRemark;
  edges = postSlugs.map(slug => edges.filter(e => e.node.frontmatter.slug === slug)[0]);

  const pageTitle =
    currentPage > 1
      ? `${sortByNew ? '' : 'Top '}Posts - Page ${currentPage} - ${siteTitle}`
      : sortByNew
      ? siteTitle
      : `Top Posts - ${siteTitle}`;

  return (
    <TemplateWrapper>
      <NavHeader />
      <Layout title={pageTitle} description={siteSubtitle}>
        <Helmet>
          <script type="application/ld+json">
            {`{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "${author.name}",
  "url": "https://blanla.com",
  "sameAs": [
    "https://twitter.com/abidemikusimo",
    "https://www.linkedin.com/in/abidemi-kusimo-989043174/"
  ]
}`}
          </script>
        </Helmet>
        <Page
          title={currentPage > 1 ? `Page ${currentPage}` : ''}
          meta={<SortBySelector sortByNew={sortByNew} />}
        >
          <Feed edges={edges} />
          <Pagination
            currentPage={currentPage}
            pagePath={sortByNew ? postPagePath : topPostsPagePath}
            hasPrevPage={hasPrevPage}
            hasNextPage={hasNextPage}
            numPages={numPages}
          />
        </Page>
        <Sidebar location={location} hideSubscribeForm={true} hideAd={true} />
      </Layout>
      <Footer />
    </TemplateWrapper>
  );
};

export const query = graphql`
  query IndexTemplate($postSlugs: [String]!) {
    site {
      siteMetadata {
        author {
          name
        }
        title
        subtitle
      }
    }
    allMarkdownRemark(filter: { frontmatter: { slug: { in: $postSlugs } } }) {
      edges {
        node {
          frontmatter {
            slug
          }
        }
        ...FeedFragment
      }
    }
  }
`;

export default IndexTemplate;
