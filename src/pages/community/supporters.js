import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import CommunityNavigation from '../../components/community/CommunityNavigation'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import Section from '../../components/Section'

const CommunitySupporters = ({ data }) => (
  <Layout>
    <CommunityNavigation />
    <Section>
      <Container>
        <PageTitle>Supporters</PageTitle>
      </Container>
    </Section>
    <section className="hero is-primary">
      <div className="hero-body">
        <Container>
          <div className="testimonial">
            <blockquote>
              It honestly made me feel valued and wanted. Knowing that there was
              an extra effort to include women and other minorities within the
              field made me want to be involved even more. Also, it was kind of
              surprising to me to be included within diversity. So often, women
              aren’t included or considered to be a part of making something
              diverse. People tend to think more about race in that case.
              Knowing that it was being recognized that women don’t have the
              same advantages within tech and that an organization was focused
              on improving that issue meant a lot to me.
            </blockquote>
            <p className="has-text-weight-bold has-text-right">
              &mdash; Taylor Cox
            </p>
          </div>
        </Container>
      </div>
    </section>
    <Section>
      <Container>
        <div className="content">
          <p>
            Suncoast Developers Guild would like to thank these companies for
            supporting our mission. They help make it possible for us to fulfill
            our vision in Tampa Bay.
          </p>
        </div>
        <div className="columns is-multiline">
          {data.allContentfulSponsor.edges.map(({ node: sponsor }) => (
            <div className="column is-one-third" key={sponsor.name}>
              <div className="box has-text-centered">
                <OutboundLink href={sponsor.url}>
                  <Image
                    Tag="figure"
                    className="image"
                    fluid={sponsor.logo.fluid}
                    alt={sponsor.logo.description}
                  />
                </OutboundLink>
                <hr />
                <OutboundLink href={sponsor.url}>
                  <h4 className="title is-4">{sponsor.benefit}</h4>
                </OutboundLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  </Layout>
)

export default CommunitySupporters

export const pageQuery = graphql`
  query {
    allContentfulSponsor(sort: { fields: createdAt }) {
      edges {
        node {
          name
          benefit
          url
          logo {
            fluid(maxWidth: 640, maxHeight: 200, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
