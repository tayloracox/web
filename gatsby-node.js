const path = require('path')
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

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const Post = path.resolve('src/components/Post/index.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: {
                fileAbsolutePath: { regex: "/data/posts/" }
                frontmatter: { draft: { eq: true } }
              }
            ) {
              edges {
                node {
                  id
                  html
                  frontmatter {
                    title
                    image
                    published_on
                    description
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

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
