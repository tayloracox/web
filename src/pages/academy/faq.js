import React from 'react'
import AcademyNavigation from '../../components/AcademyNavigation'

const sluggify = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9_\-]+/g, '-')
    .replace(/\-\-+/g, '-')
    .replace(/\-$/, '')
    .split('-')
    .slice(0, 6)
    .join('-')

const FAQListItem = ({ question }) => (
  <li>
    <a href={`#${sluggify(question)}`}>{question}</a>
  </li>
)

const FAQItem = ({ answer, question }) => (
  <div className="faq">
    <hr />
    <h3 id={sluggify(question)}>
      <a href={`#${sluggify(question)}`}>{question}</a>
    </h3>
    <div dangerouslySetInnerHTML={{ __html: answer }} />
  </div>
)

const AcademyFAQPage = ({ data }) => (
  <div className="AcademyPage FAQ">
    <AcademyNavigation />
    <div className="wrap">
      <h2>Frequently Asked Questions</h2>

      <ul className="faqs-list">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <FAQListItem
            key={node.frontmatter.position}
            question={node.frontmatter.title}
          />
        ))}
      </ul>

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
