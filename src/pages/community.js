import React from 'react'
import Link from 'gatsby-link'
import Organization from '../components/Organization'

const CommunityPage = ({ data }) => (
  <div className="CommunityPage">
    <div className="wrap">
      <h2>Community</h2>
      <p>
        Suncoast Developers Guild is proud to help connect dozens of local tech
        organizations.
      </p>
      <div className="organizations">
        <ul>
          {data.allOrganizationsJson.edges.map(({ node }) => (
            <li key={node.internal.contentDigest}>
              <img src={node.thumbnail} width="32" />
              <h4>
                <a href={node.url}>{node.title}</a>
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export const query = graphql`
  query OrganizationsQuery {
    allOrganizationsJson(sort: { fields: [founded_on], order: ASC }) {
      edges {
        node {
          internal {
            contentDigest
          }
          title
          url
          thumbnail
        }
      }
    }
  }
`

export default CommunityPage
