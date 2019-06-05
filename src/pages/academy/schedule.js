import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import AcademyNavigation from '../../components/academy/AcademyNavigation'
import ProgramNavigation from '../../components/academy/ProgramNavigation'
import DailySchedule from '../../components/academy/DailySchedule'

const AcademySchedule = () => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle seo="Daily Schedule">Web Development Program</PageTitle>
        <ProgramNavigation />
        <DailySchedule />
      </Container>
    </Section>
  </Layout>
)

export default AcademySchedule
