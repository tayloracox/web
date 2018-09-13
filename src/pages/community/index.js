import React from 'react'
import Link from 'gatsby-link'
import Meetup from '../../components/Meetup'
import orgs from '../../orgs.json'
import CommunityNavigation from '../../components/CommunityNavigation'
import PageHeading from '../../components/PageHeading'

const CommunityPage = ({ data }) => (
  <div className="CommunityPage">
    <CommunityNavigation />
    <div className="wrap">
      <PageHeading>Community</PageHeading>
      <p>
        Suncoast Developers Guild is proud to help connect dozens of local tech
        organizations.
      </p>
      <section className="organizations">
        <h2>Our Member Organizations</h2>

        <ul>
          {orgs.sort((a, b) => a.created - b.created).map(org => (
            <Meetup group={org} key={org.id} />
          ))}
        </ul>
      </section>
    </div>
  </div>
)

export default CommunityPage
