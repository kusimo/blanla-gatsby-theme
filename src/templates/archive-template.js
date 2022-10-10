// @flow
import { graphql } from 'gatsby';
import React from 'react';

import Feed from '../components/Feed';
import Layout from '../components/Layout';
import NavHeader from '../components/NavHeader';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TemplateWrapper from '../components/TemplateWrapper';

type Props = {|
  +data: Object,
|};

const ArchiveTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;
  const { edges } = data.allMarkdownRemark;

  return (
    <TemplateWrapper>
      <NavHeader />
      <Layout
        title={`Blog Archive - ${siteTitle}`}
        description={`An archive of all my blog posts. ${siteSubtitle}`}
      >
        <Page>
          <Feed edges={edges} shortened={true} />
        </Page>
        <Sidebar hideSubscribeForm={true} hideAd={true} />
      </Layout>
      <Footer />
    </TemplateWrapper>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: {
          template: { eq: "post" }
          draft: { ne: true }
          guestAuthor: { in: [null, ""] }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        ...FeedFragment
      }
    }
  }
`;

export default ArchiveTemplate;
