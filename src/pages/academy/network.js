import React from 'react'
import Img from 'gatsby-image'
import AcademyNavigation from '../../components/AcademyNavigation'

const AcademyNetworkPage = props => (
  <div className="AcademyPage Network">
    <AcademyNavigation />
    <div className="wrap">
      <h2>Hiring Network</h2>

      {/* <p>Talk about the kind of companies we have for hiring partners.</p> */}

      <h3>Some of the great companies where our alumni work:</h3>

      <ul className="companies">
        <li>
          <Img
            title="Spatial Networks"
            alt="Spatial Networks Logo"
            sizes={props.data.spatialNetworks.sizes}
          />
        </li>
        <li>
          <Img
            title="PROforma"
            alt="PROforma Logo"
            sizes={props.data.proforma.sizes}
          />
        </li>
        <li>
          <Img title="Gooee" alt="Gooee Logo" sizes={props.data.gooee.sizes} />
        </li>
        <li className="netsvs">
          <Img
            title="NetSynergy Virtual Solutions"
            alt="NetSynergy Virtual Solutions Logo"
            sizes={props.data.netsvs.sizes}
          />
        </li>
        <li>
          <Img title="Bisk" alt="Bisk Logo" sizes={props.data.bisk.sizes} />
        </li>
      </ul>

      <h3>Why become part of our Hiring Network?</h3>

      <ul className="why">
        <li>
          Speak to students during the cohort, host field trips and lighting
          talks at your offices!
        </li>
        <li>
          Meet our upcoming graduates <em>before</em> Demo Day.
        </li>
        <li>Access to our reverse job board.</li>
      </ul>
    </div>
  </div>
)

export const pageQuery = graphql`
  query NetworkPageQuery {
    gooee: imageSharp(id: { regex: "/network/gooee/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    bisk: imageSharp(id: { regex: "/network/bisk/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    netsvs: imageSharp(id: { regex: "/network/netsvs/" }) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
      resolutions(width: 120, height: 120) {
        ...GatsbyImageSharpResolutions
      }
    }
    proforma: imageSharp(id: { regex: "/network/proforma/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    spatialNetworks: imageSharp(id: { regex: "/network/spatial-networks/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default AcademyNetworkPage
