import React from 'react'
import Img from 'gatsby-image'
import CommunityNavigation from '../../components/CommunityNavigation'
import PageHeading from '../../components/PageHeading'

const CommunityNetworkPage = props => (
  <div className="CommunityPage Network">
    <CommunityNavigation />
    <div className="wrap">
      <PageHeading>Supporters</PageHeading>
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
          <div className="logo">
            <a href="http://www.proforma.com/" target="_blank">
              <Img
                title="PROforma"
                alt="PROforma Logo"
                sizes={props.data.proforma.sizes}
              />
            </a>
          </div>
          <hr />
          <a href="http://www.proforma.com/" target="_blank">
            <span className="supporter-tagline">Workforce Training</span>
          </a>
        </li>
        <li>
          <a href="https://www.carltonfields.com/" target="_blank">
            <Img
              title="Carlton Fields"
              alt="Carlton Fields Logo"
              sizes={props.data.carltonFields.sizes}
            />
          </a>
          <hr />
          <a href="https://www.carltonfields.com/" target="_blank">
            <span className="supporter-tagline">Legal</span>
          </a>
        </li>
        <li>
          <a href="https://www.embarccollective.com/" target="_blank">
            <Img
              title="Embarc Collective"
              alt="Embarc Collective Logo"
              sizes={props.data.embarc.sizes}
            />
          </a>
          <hr />
          <a href="https://www.embarccollective.com/" target="_blank">
            <span className="supporter-tagline">Collaborator</span>
          </a>
        </li>
        <li>
          <a href="https://www.walmart.com/" target="_blank">
            <Img
              title="Walmart"
              alt="Walmart Logo"
              sizes={props.data.walmart.sizes}
            />
          </a>
          <hr />
          <a href="https://www.walmart.com/" target="_blank">
            <span className="supporter-tagline">Diversity Grant</span>
          </a>
        </li>
        <li className="whentohelp">
          <a href="https://www.whentohelp.com/" target="_blank">
            <Img
              title="When to Help"
              alt="When to Help Logo"
              sizes={props.data.whentohelp.sizes}
            />
          </a>
          <hr />
          <a href="https://www.whentohelp.com/" target="_blank">
            <span className="supporter-tagline">Volunteer Application</span>
          </a>
        </li>
        <li className="roane">
          <Img title="Roane" alt="Roane Logo" sizes={props.data.roane.sizes} />
          <hr />
          <span className="supporter-tagline">Signage</span>
        </li>
      </ul>
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
    embarc: imageSharp(id: { regex: "/network/embarc/" }) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    walmart: imageSharp(id: { regex: "/network/walmart/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    whentohelp: imageSharp(id: { regex: "/network/whentohelp/" }) {
      sizes(maxWidth: 100, maxHeight: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default CommunityNetworkPage
