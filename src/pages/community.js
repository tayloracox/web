import React from 'react'
import Link from 'gatsby-link'

const CommunityPage = () => (
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
    </div>
  </div>
)

export default CommunityPage
