// @flow
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import TemplateWrapper from '../components/TemplateWrapper';

type Props = {|
  +data: Object,
|};

const PageTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const {
    title: pageTitle,
    description: pageDescription,
    hideSubscribe,
    hideAd,
    noIndex,
  } = data.markdownRemark.frontmatter;

  const { html: pageBody } = data.markdownRemark;

  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <TemplateWrapper>
      <NavHeader />
      <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
        {noIndex && (
          <Helmet>
            <meta name="robots" content="noindex" />
          </Helmet>
        )}
        <Page title={pageTitle}>
          <div dangerouslySetInnerHTML={{ __html: pageBody }} />
        </Page>
        <Sidebar hideSubscribeForm={true} hideAd={true} />
      </Layout>
      <Footer />
    </TemplateWrapper>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        hideSubscribe
        hideAd
        noIndex
      }
    }
  }
`;

export default PageTemplate;
