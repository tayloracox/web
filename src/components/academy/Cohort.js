import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import moment from 'moment'
import Container from '../../components/Container'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import Icon from '../../components/Icon'

const Cohort = ({
  title,
  date,
  cohortLogo,
  demo_day_graduate,
  sponsorLogo,
  sponsorText,
  thankYou,
  thankYouImage,
}) => {
  const profiles = demo_day_graduate
  profiles.sort(() => 0.5 - Math.random())
  profiles.sort(a => {
    if (a.hireable) return -1
    return 0
  })

  return (
    <>
      <Section>
        <Container>
          <header className="cohort-header">
            <PageTitle>{`${title} Demo Day`}</PageTitle>
            <h4 className="subtitle is-4">
              {moment(date).format('MMMM, Do Y')}
            </h4>
            <figure className="image">
              <img src={cohortLogo.file.url} width="128" />
            </figure>
          </header>

          <div className="content">
            <p>
              After their 12-week journey to becoming Full-Stack Developers, our
              students have grown their technical skills. These students have
              gone from little to no experience to learning HTML/CSS,
              JavaScript, React and then diving into .NET or Ruby on Rails to
              round out their full-stack understanding. We are proud to present
              to you our graduating students from {title}.
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

            <h3>Interested in taking classes or learning more?</h3>
            <p>
              We are still accepting applications for our next cohort begining
              January 28th. <Link to="/academy">Find out more.</Link>
            </p>
          </div>

          <h3 className="title is-3">Our Graduates</h3>

          {profiles.map(({ student, description, tagLine, hireable }) => (
            <React.Fragment key={student.name}>
              <div className="columns demo-day-graduate">
                <div className="column is-narrow has-text-centered">
                  <Image
                    className="image"
                    Tag="p"
                    fixed={student.image.fixed}
                    alt={student.image.description}
                  />
                </div>
                <div class="column">
                  <h4 className="title is-4">{student.name}</h4>
                  <h5
                    className="subtitle is-5"
                    dangerouslySetInnerHTML={{
                      __html: tagLine,
                    }}
                  />
                  <div
                    class="content"
                    dangerouslySetInnerHTML={{
                      __html: description.childMarkdownRemark.html,
                    }}
                  />
                  <nav class="level">
                    <div className="level-left">
                      {hireable && (
                        <p className="level-item">
                          <span className="tag is-primary">
                            Availble for Hire
                          </span>
                        </p>
                      )}
                    </div>
                    <div class="level-right">
                      <div className="level-item social-links">
                        {student.github && (
                          <OutboundLink
                            href={`https://github.com/${student.github}`}
                          >
                            <Icon i="fab fa-github fa-lg" />
                          </OutboundLink>
                        )}
                        {student.portfolioUrl && (
                          <OutboundLink href={student.portfolioUrl}>
                            <Icon i="fas fa-suitcase fa-lg" />
                          </OutboundLink>
                        )}
                        {student.email && (
                          <OutboundLink href={`mailto:${student.email}`}>
                            <Icon i="fas fa-envelope fa-lg" />
                          </OutboundLink>
                        )}
                        {student.linkedIn && (
                          <OutboundLink
                            href={`https://www.linkedin.com/in/${
                              student.linkedIn
                            }/`}
                          >
                            <Icon i="fab fa-linkedin fa-lg" />
                          </OutboundLink>
                        )}
                        {student.twitter && (
                          <OutboundLink
                            href={`https://twitter.com/${student.twitter}`}
                          >
                            <Icon i="fab fa-twitter fa-lg" />
                          </OutboundLink>
                        )}
                        {student.blogUrl && (
                          <OutboundLink href={student.blogUrl}>
                            <Icon
                              i={
                                student.blogUrl.includes('medium.com')
                                  ? 'fab fa-medium fa-lg'
                                  : 'fas fa-blog fa-lg'
                              }
                            />
                          </OutboundLink>
                        )}
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </Container>
      </Section>
      <section className="hero demo-day-sponsor">
        <div className="hero-body">
          <div className="container">
            {thankYou && (
              <>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: thankYou.childMarkdownRemark.html,
                  }}
                />
                <Image
                  Tag="figure"
                  className="image"
                  fluid={thankYouImage.fluid}
                  alt={thankYouImage.description}
                />
                <hr />
              </>
            )}
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: sponsorText.childMarkdownRemark.html,
              }}
            />
            <Image
              Tag="figure"
              className="image"
              fluid={sponsorLogo.fluid}
              alt={sponsorLogo.description}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export const DemoDayCohortFragment = graphql`
  fragment DemoDayCohort on ContentfulDemoDay {
    title
    date
    sponsorUrl
    cohortLogo {
      file {
        url
      }
    }
    sponsorLogo {
      fluid(maxWidth: 240, maxHeight: 160, resizingBehavior: PAD) {
        ...GatsbyContentfulFluid_withWebp
      }
      description
    }
    sponsorText {
      childMarkdownRemark {
        html
      }
    }
    demo_day_graduate {
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
    thankYou {
      childMarkdownRemark {
        html
      }
    }
    thankYouImage {
      fluid(maxWidth: 240, maxHeight: 160, resizingBehavior: PAD) {
        ...GatsbyContentfulFluid_withWebp
      }
      description
    }
  }
`

export default Cohort
