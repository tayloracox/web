import React from 'react'
import Link from 'gatsby-link'
import Icon from './Icon'

const AcademyNavigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/academy" exact={true} activeClassName="active">
          <figure>
            <Icon name="program" />
          </figure>
          Web Development
        </Link>
      </li>
      <li>
        <Link to="/academy/admissions" activeClassName="active">
          <figure>
            <Icon name="admissions" />
          </figure>
          Admissions
        </Link>
      </li>
      <li>
        <Link to="/academy/refer" activeClassName="active">
          <figure>
            <Icon name="referrals" />
          </figure>
          Refer
        </Link>
      </li>
      <li>
        <Link to="/academy/success" activeClassName="active">
          <figure>
            <Icon name="success" />
          </figure>
          Success Stories
        </Link>
      </li>
      {/* <li>
        <Link to="/academy/network" activeClassName="active">
          <figure>
            <Icon name="network" />
          </figure>
          Hiring Network
        </Link>
      </li> */}
      {/* <li>
        <Link to="/academy/faq" activeClassName="active">
          <figure>
            <Icon name="faq" />
          </figure>
          FAQ
        </Link>
      </li> */}
      <li>
        <Link to="/academy/apply" activeClassName="active">
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
