import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import React from 'react';

import Layout from '../components/Layout';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import TemplateWrapper from '../components/TemplateWrapper';

const TagsListTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const { group } = data.allMarkdownRemark;

  group.sort((a, b) => b.totalCount - a.totalCount);

  return (
    <TemplateWrapper>
      <NavHeader />
      <Layout title={`Tags - ${title}`} description={subtitle}>
        <Page title="Tags" subtitle={<Link to="/">← Back to Home</Link>}>
          <ul>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </Page>
        <Sidebar hideSubscribeForm={true} hideAd={true} />
      </Layout>
      <Footer />
    </TemplateWrapper>
  );
};

export const query = graphql`
  query TagsListQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsListTemplate;
