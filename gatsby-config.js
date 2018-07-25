module.exports = {
  siteMetadata: {
    title: 'Suncoast Developers Guild',
    siteUrl: `https://suncoast.io`,
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/media/`,
        name: 'media',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-120953554-1',
      },
    },
  ],
}
