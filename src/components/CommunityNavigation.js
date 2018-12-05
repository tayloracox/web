import React from 'react'
import Link from 'gatsby-link'
import Icon from './Icon'

const CommunityNavigation = () => (
  <nav>
    <ul>
      <li>
        <Link
          to="/community"
          className="first-icon"
          exact={true}
          activeClassName="active"
        >
          <figure>
            <Icon name="organizations" />
          </figure>
          Member Organizations
        </Link>
      </li>
      <li>
        <Link to="/community/supporters" activeClassName="active">
          <figure>
            <Icon name="supporters" />
          </figure>
          Supporters
        </Link>
      </li>
      <li>
        <Link to="/community/joint-training" activeClassName="active">
          <figure>
            <Icon name="jointTraining" />
          </figure>
          Joint Training
        </Link>
      </li>
      <li>
        <Link to="/community/sponsor" activeClassName="active">
          <figure>
            <Icon name="sponsor" />
          </figure>
          Sponsorship
        </Link>
      </li>
    </ul>
    {/* <div className="note">
      Our Summer 2018 cohort begins July 23<sup>rd</sup>!
    </div> */}
  </nav>
)

export default CommunityNavigation
