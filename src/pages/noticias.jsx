import React from 'react';
import Layout from './../components/Layout';
import { H1 } from '../components/Headers';


function getCleanNewsData(newsEdges) {
  return newsEdges.map(({
    node: {
      frontmatter: {
        title,
        date,
        path
      }, 
      excerpt
    }
  }) => ({
    title,
    date,
    path,
    excerpt
  }));
}

function Noticias ({data: {news}}) {
  const cleanNewsData = getCleanNewsData(news.edges);
  console.table(cleanNewsData);

  return (
    <Layout>
      <H1>Noticias</H1>

    </Layout>
  )
}

export default Noticias;

export const query = graphql`
  query AllBlogEntries {
    news: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: ASC},
      filter: {frontmatter: {type: {eq: "news"}}}
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
          excerpt
        } 
      }
    }
  }
`;