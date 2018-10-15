import React from 'react'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
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
          <OutboundLink href="https://spatialnetworks.com/" target="_blank">
            <Img
              title="Spatial Networks"
              alt="Spatial Networks Logo"
              sizes={props.data.spatialNetworks.sizes}
            />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="http://www.proforma.com/usa/" target="_blank">
            <Img
              title="PROforma"
              alt="PROforma Logo"
              sizes={props.data.proforma.sizes}
            />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://gooee.com/" target="_blank">
            <Img
              title="Gooee"
              alt="Gooee Logo"
              sizes={props.data.gooee.sizes}
            />
          </OutboundLink>
        </li>
        <li className="haneke">
          <OutboundLink href="https://www.hanekedesign.com/" target="_blank">
            <Img
              title="Haneke"
              alt="Haneke Design Logo"
              sizes={props.data.haneke.sizes}
            />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.malwarebytes.com/" target="_blank">
            <Img
              title="Malware Bytes"
              alt="Malware Bytes Logo"
              sizes={props.data.malwarebytes.sizes}
            />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.raymondjames.com/" target="_blank">
            <Img
              title="Raymond James"
              alt="Raymond James Logo"
              sizes={props.data.raymondJames.sizes}
            />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.clarityservices.com/" target="_blank">
            <Img
              title="Clarity Services"
              alt="Clarity Services Logo"
              sizes={props.data.clarity.sizes}
            />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://about.gitlab.com/" target="_blank">
            <Img
              title="Gitlab"
              alt="Gitlab Logo"
              sizes={props.data.gitlab.sizes}
            />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="http://www.presence.io/" target="_blank">
            <Img
              title="Presence"
              alt="Presence Logo"
              sizes={props.data.presence.sizes}
            />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.bisk.com/" target="_blank">
            <Img title="Bisk" alt="Bisk Logo" sizes={props.data.bisk.sizes} />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://zenisoftware.com/" target="_blank">
            <Img
              title="Zeni Software"
              alt="Zeni Software Logo"
              sizes={props.data.zeniSoftware.sizes}
            />
          </OutboundLink>
        </li>
        <li className="padWhite">
          <OutboundLink href="https://www.ozk.com/personal" target="_blank">
            <Img
              title="Bank of the Ozarks"
              alt="Bank of the Ozarks Logo"
              sizes={props.data.ozk.sizes}
            />
          </OutboundLink>
        </li>
        <li className="padWhite netsvs">
          <OutboundLink href="https://www.mynetsvs.com/" target="_blank">
            <Img
              title="NetSynergy Virtual Solutions"
              alt="NetSynergy Virtual Solutions Logo"
              sizes={props.data.netsvs.sizes}
            />
          </OutboundLink>
        </li>
        <li className="padWhite echnobind">
          <OutboundLink href="https://echobind.com/" target="_blank">
            <Img
              title="Echnobind"
              alt="Echnobind Logo"
              sizes={props.data.echnobind.sizes}
            />
          </OutboundLink>
        </li>
        <li className="exzeo">
          <OutboundLink href="https://exzeo.com/" target="_blank">
            <Img
              title="Exzeo"
              alt="Exzeo Logo"
              sizes={props.data.exzeo.sizes}
            />
          </OutboundLink>
        </li>
        <li className="padWhite knowbe4">
          <OutboundLink href="https://www.knowbe4.com/" target="_blank">
            <Img
              title="KnowBe4"
              alt="KnowBe4 Logo"
              sizes={props.data.knowbe4.sizes}
            />
          </OutboundLink>
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
    ozk: imageSharp(id: { regex: "/network/ozk/" }) {
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
    knowbe4: imageSharp(id: { regex: "/network/knowbe4/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    exzeo: imageSharp(id: { regex: "/network/exzeo/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default AcademyNetworkPage
