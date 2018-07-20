import React from 'react'
import FeatureImage from './FeaturedImage'

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <div className="BlogPage Post">
      <div className="wrap">
        <h1>{post.frontmatter.title}</h1>
        <FeaturedImage image={post.frontmatter.image} />
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
        image
      }
    }
  }
`
