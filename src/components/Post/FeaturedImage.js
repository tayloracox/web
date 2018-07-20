import React from 'react'

export default ({ image }) => {
  return <div className="featured-image">!!!{image}</div>
}

export const query = graphql`
  query ImageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`
