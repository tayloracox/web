import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Section from '../components/Section'
import PageTitle from '../components/PageTitle'
import AcademyNavigation from '../components/academy/AcademyNavigation'
import Graduate from '../components/academy/Graduate'

const DemoDayPage = ({ data }) => {
  return (
    <Layout>
      <AcademyNavigation />
      <Section>
        <Container>
          <PageTitle>Our Recent Graduates</PageTitle>

          <div className="content">
            <p>
              After their 12-week journey to becoming Full-Stack Developers, our
              students have grown their technical skills. These students have
              gone from little to no experience to learning HTML/CSS,
              JavaScript, React and then diving into .NET or Ruby on Rails to
              round out their full-stack understanding.
            </p>

            <h3>Interested in hiring a graduate?</h3>
            <p>
              All of our graduates are ready for their first jobs as junior
              developers. If you meet someone today who would be a great fit for
              your team, please feel free to reach out to them directly. If you
              want more information about how our career support program works
              or direct recommendations for your needs, please contact us at
              hello@suncoast.io.
            </p>
          </div>

          {data.allContentfulDemoDayGraduate.edges.map(({ node }) => (
            <Graduate {...node} key={node.student.name} />
          ))}
        </Container>
      </Section>
    </Layout>
  )
}

export default DemoDayPage

export const pageQuery = graphql`
  query {
    allContentfulDemoDayGraduate(
      filter: { hireable: { eq: true } }
      sort: { fields: updatedAt, order: DESC }
    ) {
      edges {
        node {
          tagLine
          hireable
          description {
            childMarkdownRemark {
              html
            }
          }
          student {
            name
            twitter
            github
            linkedIn
            blogUrl
            portfolioUrl
            email
            image {
              fixed(width: 200, height: 200) {
                ...GatsbyContentfulFixed_withWebp
              }
              description
            }
          }
        }
      }
    }
  }
`
