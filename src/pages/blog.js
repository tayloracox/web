import React from 'react'
import Link from 'gatsby-link'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="BlogPage Index">
      <div className="wrap">
        {posts.map(({ node: post }) => (
          <div className="preview" key={post.id}>
            <h2>
              <Link to={'/blog' + post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </h2>
            <h3>{post.frontmatter.published_on}</h3>
            <p>{post.frontmatter.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/data/posts/" }
        frontmatter: { draft: { eq: true } }
      }
      sort: { order: DESC, fields: [frontmatter___published_on] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
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
