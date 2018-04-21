import React from 'react'
import Link from 'gatsby-link'
import Icon from './Icon'

const AcademyNavigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/academy">
          <figure>
            <Icon name="program" />
          </figure>
          Web Development
        </Link>
      </li>
      <li>
        <Link to="/academy/admissions">
          <figure>
            <Icon name="admissions" />
          </figure>
          Admissions
        </Link>
      </li>
      <li>
        <Link to="/academy/network">
          <figure>
            <Icon name="network" />
          </figure>
          Hiring Network
        </Link>
      </li>
      <li>
        <Link to="/academy/faq">
          <figure>
            <Icon name="faq" />
          </figure>
          FAQ
        </Link>
      </li>
      <li>
        <Link to="/academy/apply">
          <figure>
            <Icon name="apply" />
          </figure>
          Apply Now
        </Link>
      </li>
    </ul>
  </nav>
)

export default AcademyNavigation
