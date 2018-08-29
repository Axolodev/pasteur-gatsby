module.exports = {
  siteMetadata: {
    title: 'Laboratorios Pasteur',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/content/slides`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sucursales`,
        path: `${__dirname}/content/sucursales`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `noticias`,
        path: `${__dirname}/content/noticias`,
      },
    },
    'gatsby-transformer-remark'
  ]
}
