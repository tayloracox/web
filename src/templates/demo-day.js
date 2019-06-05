import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AcademyNavigation from '../components/academy/AcademyNavigation'
import Cohort from '../components/academy/Cohort'

const DemoDay = ({ data }) => {
  return (
    <Layout>
      <AcademyNavigation />
      <Cohort {...data.contentfulDemoDay} />
    </Layout>
  )
}

export default DemoDay

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulDemoDay(slug: { eq: $slug }) {
      ...DemoDayCohort
    }
  }
`
