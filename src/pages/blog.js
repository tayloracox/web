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
            <aside>
              <figure className="featured">
                <Image sizes={post.fields.image.childImageSharp.feature} />
              </figure>
            </aside>
            <article>
              <h3>
                <Link to={'/blog' + post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </h3>
              <time>
                {moment(post.frontmatter.date).format('MMMM Do YYYY')}
              </time>

              <p>{post.frontmatter.description}</p>
            </article>
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
        frontmatter: { draft: { ne: true } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
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
