const path = require('path')
const fs = require('fs')
const Feed = require('feed')
const config = require('./gatsby-config')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const slug = createFilePath({ node, getNode, basePath: 'posts' })
    createNodeField({ node, name: 'slug', value: slug })

    // TODO: Generalize this for more fields, not just 'image'
    const { frontmatter } = node
    if (frontmatter) {
      const { image } = frontmatter
      if (image) {
        if (image.indexOf('/media') === 0) {
          const relativePath = path.relative(
            path.dirname(node.fileAbsolutePath),
            path.join(__dirname, '/static/', image)
          )
          createNodeField({ node, name: 'image', value: relativePath })
        }
      }
    }
  }
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    if (
      page.path.match(/^\/(academy\/(apply|refer)|volunteer)/) ||
      page.path.match(/^\/(community\/joint-training)/)
    ) {
      page.layout = 'formEmbed'
      createPage(page)
    }

    resolve()
  })
}

exports.onPostBuild = ({ graphql }) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            filter: {
              fileAbsolutePath: { regex: "/data/posts/" }
              frontmatter: { draft: { ne: true } }
            }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                html
                frontmatter {
                  title
                  date
                  description
                  author
                }
                fields {
                  slug
                  image {
                    childImageSharp {
                      feature: sizes(maxWidth: 640, maxHeight: 480) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) reject(result.errors)
        let feed = new Feed({
          title: config.siteMetadata.title,
          description: config.siteMetadata.description,
          favicon: `${config.siteMetadata.siteUrl}/favicon.ico`,
          link: config.siteMetadata.siteUrl,
          id: config.siteMetadata.siteUrl,
          copyright:
            'All rights reserved 2018, SUNCOAST DEVELOPERS GUILD, INC.',
          // updated: new Date(2013, 06, 14), // TODO: latest post date
          feedLinks: {
            atom: `${config.siteMetadata.siteUrl}/atom.xml`,
            json: `${config.siteMetadata.siteUrl}/feed.json`,
          },
          author: {
            name: 'Suncoast Developers Guild',
            email: 'hello@suncoast.io',
          },
        })
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          feed.addItem({
            id: node.fields.slug,
            link: `${config.siteMetadata.siteUrl}/blog${node.fields.slug}`,
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            date: new Date(node.frontmatter.date),
            image:
              config.siteMetadata.siteUrl +
              node.fields.image.childImageSharp.feature.src,
            content: node.html,
            author: {
              name: node.frontmatter.author,
            },
          })
        })
        fs.writeFileSync('./public/atom.xml', feed.atom1())
        fs.writeFileSync('./public/rss.xml', feed.rss2())
        fs.writeFileSync('./public/feed.json', feed.json1())
      })
    )
  })
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const Post = path.resolve('src/components/Post.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: {
                fileAbsolutePath: { regex: "/data/posts/" }
                frontmatter: { draft: { ne: true } }
              }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) reject(result.errors)

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: '/blog' + node.fields.slug,
            component: Post,
            context: { ...node.fields },
            // layout: `blog-layout`,
          })
        })
      })
    )
  })
}
