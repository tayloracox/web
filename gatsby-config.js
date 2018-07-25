module.exports = {
  siteMetadata: {
    title: 'Suncoast Developers Guild',
    description:
      'Suncoast Developers Guild is a collective of software engineers, programmers, and designers in Tampa Bay.',
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
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           title
    //           description
    //           siteUrl
    //           site_url: siteUrl
    //         }
    //       }
    //     }
    //   `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             const post = edge.node
    //             const url = `${site.siteMetadata.siteUrl}/blog${
    //               post.fields.slug
    //             }`
    //             return {
    //               title: post.frontmatter.title,
    //               date: post.frontmatter.date,
    //               description: post.frontmatter.description,
    //               url,
    //               guid: url,
    //               custom_elements: [
    //                 { 'content:encoded': post.html },
    //                 {
    //                   'media:thumbnail':
    //                     post.fields.image.childImageSharp.thumbnail.src,
    //                 },
    //               ],
    //             }
    //           })
    //         },
    //         query: `
    //         {
    //           allMarkdownRemark(limit: 1000, sort: {
    //             order: DESC, fields: [frontmatter___date]},
    //             filter: {fileAbsolutePath: {regex: "/data/posts/"},
    //             frontmatter: {draft: {ne: true}}}) {
    //             edges {
    //               node {
    //                 excerpt
    //                 html
    //                 fields {
    //                   slug
    //                   image {
    //                     childImageSharp {
    //                       thumbnail: sizes(maxWidth: 320, maxHeight: 320) {
    //                         src
    //                       }
    //                     }
    //                   }
    //                 }
    //                 frontmatter {
    //                   title
    //                   date
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `,
    //         output: '/rss.xml',
    //       },
    //     ],
    //   },
    // },
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
