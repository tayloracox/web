import React from 'react'
import Link from 'gatsby-link'
import Organization from '../components/Organization'

const CommunityPage = ({ data }) => (
  <div className="CommunityPage">
    <div className="Events">
      <h2>Upcoming Events</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <span className="month">May</span>
              <span className="day">24</span>
            </td>
            <td>
              <h3>
                <a href="https://www.meetup.com/suncoast-developers-guild/events/248468799/">
                  Kid's Academy with SDG Jr.
                </a>
              </h3>
              <h4>
                Hosted by: <strong>Suncoast Developers Guild</strong>
              </h4>
            </td>
            <td>Monday @ 6:30 PM</td>
          </tr>
        </tbody>
      </table>
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
