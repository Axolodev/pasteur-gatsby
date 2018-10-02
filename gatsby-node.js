const path = require("path");

const newsTemplate = path.resolve('src/templates/NewsEntry.jsx');

const getAllNewsQuery = `
  query GetAllNews {
    allNews: allMarkdownRemark (
      filter: {frontmatter: {type: {eq: "news"}}}
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        } 
      }
    }
  }
`;

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(getAllNewsQuery).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allNews.edges.forEach(({node}) => createNewsPage(node.frontmatter, createPage));
  });
};


function createNewsPage({ path }, createPage) {
  let oldPath = path;

  if(!path.startsWith('/')) {
    path = `/${path}`;
  }

  createPage({
    path: `/noticias${path}`,
    component: newsTemplate,
    context: {
      route: oldPath
    }
  })
}

