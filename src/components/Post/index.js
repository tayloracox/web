import React from 'react'
import Image from 'gatsby-image'
import moment from 'moment'
import Icon from '../Icon'

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <div className="BlogPage Post">
      <div className="wrap">
        <h1>{post.frontmatter.title}</h1>
        <div className="meta">
          <Icon name="calendar" /> <time>{post.frontmatter.published_on}</time>
        </div>
        <figure className="featured">
          <Image sizes={post.fields.image.childImageSharp.sizes} />
        </figure>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        published_on
      }
      fields {
        image {
          childImageSharp {
            sizes(maxWidth: 960) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
