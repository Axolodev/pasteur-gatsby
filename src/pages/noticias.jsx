import React from 'react';
import Layout from './../components/Layout';

function Noticias ({data}) {
  return (
    <Layout>
      Content
    </Layout>
  )
}

export default Noticias;

export const query = graphql`
  query AllBlogEntries {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "news"}}}) {
      edges {
        node {
          frontmatter {
            title
          }
          excerpt
        } 
      }
    }
  }
`;