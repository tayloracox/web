import React from 'react'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
import moment from 'moment'
import PageHeading from '../components/PageHeading'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="BlogPage Index">
      <div className="wrap">
        <PageHeading>Blog</PageHeading>
        {posts.map(({ node: post }) => (
          <div className="preview" key={post.id}>
            <h3>
              <Link to={'/blog' + post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </h3>
            <h3>
              <time>
                {moment(post.frontmatter.published_on).format('MMMM Do YYYY')}
              </time>
            </h3>
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
            image {
              childImageSharp {
                feature: sizes(maxWidth: 320, maxHeight: 320) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
