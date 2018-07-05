import React from 'react'
import CommunityNavigation from '../../components/CommunityNavigation'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const HireAlumniPage = () => (
  <div className="CommunityPage HireAlumni">
    <CommunityNavigation />
    <div className="wrap">
      <h2>Hire our Grads because they are cool!!</h2>
      <div className="quote-wrap">
        <div className="quote-box-full">
          <p>this is why they are cool....</p>
        </div>

        <div className="quote-box">
          <p>check out this testimonial from a local company that loves us</p>
          <p className="author">-Some rad CTO</p>
        </div>
      </div>
      <p className="cta">
        <OutboundLink
          href="http://gallery-gift-card.caleb.surge.sh/"
          target="_blank"
        >
          Check out the Alumni that are looking for work!
        </OutboundLink>
      </p>
    </div>
  </div>
)

export default HireAlumniPage
