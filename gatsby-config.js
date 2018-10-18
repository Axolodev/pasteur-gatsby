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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `proxima`,
        path: `${__dirname}/content/proxima`,
      },
      
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-5G9PBLJ",
        includeInDevelopment: false,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-125738292-1",
        head: true,
      },
    },
  ]
}
