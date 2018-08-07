import React from 'react'

const Content = ({ data }) => {
  const { markdownRemark: page } = data
  return (
    <div className="content">
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </div>
  )
}

export const query = graphql`
  query HandbookContentQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Content
