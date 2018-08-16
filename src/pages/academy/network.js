import React from 'react'
import Img from 'gatsby-image'
import AcademyNavigation from '../../components/AcademyNavigation'
import PageHeading from '../../components/PageHeading'

const AcademyNetworkPage = props => (
  <div className="AcademyPage Network">
    <AcademyNavigation />
    <div className="wrap">
      <PageHeading>Hiring Network</PageHeading>

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
        <li>
          <Img
            title="Haneke"
            alt="Haneke Design Logo"
            sizes={props.data.haneke.sizes}
          />
        </li>
        <li>
          <Img
            title="Malware Bytes"
            alt="Malware Bytes Logo"
            sizes={props.data.malwarebytes.sizes}
          />
        </li>
        <li>
          <Img
            title="Raymond James"
            alt="Raymond James Logo"
            sizes={props.data.raymondJames.sizes}
          />
        </li>
        <li>
          <Img
            title="Clarity Services"
            alt="Clarity Services Logo"
            sizes={props.data.clarity.sizes}
          />
        </li>
        <li>
          <Img
            title="Gitlab"
            alt="Gitlab Logo"
            sizes={props.data.gitlab.sizes}
          />
        </li>
        <li>
          <Img
            title="Presence"
            alt="Presence Logo"
            sizes={props.data.presence.sizes}
          />
        </li>
        <li>
          <Img title="Bisk" alt="Bisk Logo" sizes={props.data.bisk.sizes} />
        </li>
        <li>
          <Img
            title="Zeni Software"
            alt="Zeni Software Logo"
            sizes={props.data.zeniSoftware.sizes}
          />
        </li>
        <li className="padWhite">
          <Img
            title="Bank of the Ozarks"
            alt="Bank of the Ozarks Logo"
            sizes={props.data.ozarks.sizes}
          />
        </li>
        <li className="padWhite netsvs">
          <Img
            title="NetSynergy Virtual Solutions"
            alt="NetSynergy Virtual Solutions Logo"
            sizes={props.data.netsvs.sizes}
          />
        </li>
        <li className="padWhite echnobind">
          <Img
            title="Echnobind"
            alt="Echnobind Logo"
            sizes={props.data.echnobind.sizes}
          />
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
    bisk: imageSharp(id: { regex: "/network/bisk/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    clarity: imageSharp(id: { regex: "/network/clarity/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    gitlab: imageSharp(id: { regex: "/network/gitlab/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    gooee: imageSharp(id: { regex: "/network/gooee/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    haneke: imageSharp(id: { regex: "/network/haneke/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    malwarebytes: imageSharp(id: { regex: "/network/malwarebytes/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    netsvs: imageSharp(id: { regex: "/network/netsvs/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    ozarks: imageSharp(id: { regex: "/network/ozarks/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    presence: imageSharp(id: { regex: "/network/presence/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    proforma: imageSharp(id: { regex: "/network/proforma/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    raymondJames: imageSharp(id: { regex: "/network/raymond-james/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    spatialNetworks: imageSharp(id: { regex: "/network/spatial-networks/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    echnobind: imageSharp(id: { regex: "/network/echnobind/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    zeniSoftware: imageSharp(id: { regex: "/network/zeni-software/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default AcademyNetworkPage
