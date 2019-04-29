import React from 'react'
import Link from 'gatsby-link'

const ProgramSchedule = () => (
  <>
    <h3 className="title is-3">Program Schedule</h3>
    <div className="table-container">
      <table className="table is-fullwidth program-schedule">
        <thead>
          <tr>
            <th>Cohort</th>
            <th>Status</th>
            <th>Classes Start</th>
            <th>Graduation / Demo Day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cohort XIII</td>
            <td>
              <em>In Progress</em>
            </td>
            <td>
              January 28<sup>th</sup>, 2019
            </td>
            <td>
              April 19<sup>th</sup>, 2019
            </td>
          </tr>
          <tr className="upcoming">
            <td>Cohort XIV</td>
            <td>
              <Link to="/academy/apply">Now Enrolling</Link>
            </td>
            <td>April 29, 2019</td>
            <td>July 19, 2019</td>
          </tr>
          <tr>
            <td>Cohort XV</td>
            <td>
              <Link to="/academy/apply">Accepting Applicants</Link>
            </td>
            <td>July 29, 2019</td>
            <td>October 18, 2019</td>
          </tr>
          <tr>
            <td>Cohort XVI</td>
            <td>"</td>
            <td>Fall 2019</td>
            <td>Winter 2019</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
)

export default ProgramSchedule
