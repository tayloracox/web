import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Section from '../components/Section'
import PageTitle from '../components/PageTitle'
import Calendly from '../components/Calendly'

const InterviewPage = () => (
  <Layout>
    <Section>
      <Container>
        <PageTitle>Schedule an Interview</PageTitle>
        <h3 className="subtitle">
          If you've applied to the Web Development Program, the next step is to
          schedule an interview with our team.
        </h3>
        <Calendly />
      </Container>
    </Section>
  </Layout>
)

export default InterviewPage
