import React from 'react'
import Link from 'gatsby-link'
import Meetup from '../components/Meetup'
import orgs from '../orgs.json'

const CommunityPage = ({ data }) => (
  <div className="CommunityPage">
    <div className="wrap">
      <h2>Community</h2>
      <p>
        Suncoast Developers Guild is proud to help connect dozens of local tech
        organizations.
      </p>
      <section className="organizations">
        <h2>Our Member Organizations</h2>

        <ul>
          {orgs
            .sort((a, b) => a.created - b.created)
            .map(org => <Meetup group={org} key={org.id} />)}
        </ul>
      </section>
    </div>
  </div>
)

export default CommunityPage
