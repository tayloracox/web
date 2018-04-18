module.exports = {
  siteMetadata: {
    title: 'Suncoast Developers Guild',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'organizations',
        path: `${__dirname}/data/organizations/`,
      },
    },
    'gatsby-transformer-json',
  ],
}
