import React from 'react'
import AcademyNavigation from '../../components/AcademyNavigation'

const FAQItem = ({ answer, question }) => (
  <div className="faq">
    <h3>{question}</h3>
    <div dangerouslySetInnerHTML={{ __html: answer }} />
  </div>
)

const AcademyFAQPage = ({ data }) => (
  <div className="AcademyPage FAQ">
    <AcademyNavigation />
    <div className="wrap">
      <h2>Frequently Asked Questions</h2>

      <div className="faqs">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <FAQItem
            key={node.frontmatter.position}
            question={node.frontmatter.title}
            answer={node.html}
          />
        ))}
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query FAQPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/data/faqs/" } }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            position
          }
          html
        }
      }
    }
  }
`

export default AcademyFAQPage
