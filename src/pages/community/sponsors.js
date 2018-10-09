import React from 'react'
import Img from 'gatsby-image'
import CommunityNavigation from '../../components/CommunityNavigation'
import PageHeading from '../../components/PageHeading'

const CommunityNetworkPage = props => (
  <div className="CommunityPage Network">
    <CommunityNavigation />
    <div className="wrap">
      <PageHeading>Corporate Supporters</PageHeading>
      <div className="blockquote">
        <blockquote className="quote">
          <span className="quotation-mark">&quot;</span>
          The Proforma / SDG collaboration selected passionate junior level
          candidates and created an intensive training curriculum. This
          customized curriculum would fine tune technology concepts and focus on
          the skillsets necessary to be successful at Proforma.
          <span className="quotation-mark">&quot;</span>
          <p>
            <a href="supporter-testimonial">Read More</a>
          </p>
        </blockquote>
        <p className="author">- PROforma</p>
      </div>

      <ul className="companies">
        <li className="tab">
          <a href="http://www.proforma.com/" target="blank">
            <div className="logo">
              <Img
                title="PROforma"
                alt="PROforma Logo"
                sizes={props.data.proforma.sizes}
              />
            </div>
            <hr />
            <span className="supporter-tagline">Workforce Training</span>
          </a>
        </li>
        <li>
          <a href="https://www.carltonfields.com/" target="blank">
            <Img
              title="Carlton Fields"
              alt="Carlton Fields Logo"
              sizes={props.data.carltonFields.sizes}
            />
            <hr />
            <span className="supporter-tagline">Legal</span>
          </a>
        </li>
        <li>
          <a href="https://frontify.com/" target="blank">
            <div className="logo-half">
              <Img
                title="Frontify"
                alt="Frontify Logo"
                sizes={props.data.frontify.sizes}
              />
            </div>
            <hr />
            <span className="supporter-tagline">Branding</span>
          </a>
        </li>
        <li>
          <div className="logo-half">
            <Img
              title="Roane"
              alt="Roane Logo"
              sizes={props.data.roane.sizes}
            />
          </div>
          <hr />
          <span className="supporter-tagline">Signage</span>
        </li>
      </ul>

      {/* <h3>Why become part of our Hiring Network?</h3>

      <ul className="why">
        <li>
          Speak to students during the cohort, host field trips and lighting
          talks at your offices!
        </li>
        <li>
          Meet our upcoming graduates <em>before</em> Demo Day.
        </li>
        <li>Access to our reverse job board.</li>
      </ul> */}
    </div>
  </div>
)

export const pageQuery = graphql`
  query SponsorsPageQuery {
    proforma: imageSharp(id: { regex: "/network/proforma/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    frontify: imageSharp(id: { regex: "/network/frontify/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    carltonFields: imageSharp(id: { regex: "/network/carlton-fields/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    roane: imageSharp(id: { regex: "/network/roane/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default CommunityNetworkPage
