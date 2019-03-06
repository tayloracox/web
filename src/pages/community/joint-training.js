import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import CommunityNavigation from '../../components/community/CommunityNavigation'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import Section from '../../components/Section'

const CommunityJointTraining = ({ data }) => (
  <Layout>
    <CommunityNavigation />
    <Section>
      <Container>
        <PageTitle>Corporate Training</PageTitle>
      </Container>
    </Section>
    <section className="hero is-primary">
      <div className="hero-body">
        <Container>
          <div className="testimonial">
            <blockquote>
              The Proforma / SDG collaboration selected passionate junior level
              candidates and created an intensive training curriculum. This
              customized curriculum would fine tune technology concepts and
              focus on the skillsets necessary to be successful at Proforma.
            </blockquote>
            <p className="has-text-weight-bold has-text-right">
              &mdash; Proforma
            </p>
            <p className="has-text-centered">
              <Link
                className="button is-primary is-outlined is-inverted"
                to="/community/supporter-testimonial"
              >
                Read More&hellip;
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </section>
    <Section>
      <Container>
        <div className="content">
          <p>
            Suncoast Developers Guild can help identify, train, onboard, and
            upskill your software development team.
          </p>
          <p>
            <OutboundLink
              href="https://docs.google.com/forms/d/e/1FAIpQLSexq2nxkn3Hb6wXUTPI6JQYRev9H4Xcl875vyYuRIJVhVT9Xw/viewform"
              className="button"
            >
              Get Started
            </OutboundLink>
          </p>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default CommunityJointTraining
