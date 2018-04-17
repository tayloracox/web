import React from 'react'
import Link from 'gatsby-link'

import logoBanner from '../../images/icon-logo.svg'

const Header = () => (
  <header className="Header">
    <div className="wrap">
      <h1>
        <Link to="/">
          <img src={logoBanner} alt="Suncoast Developers Guild" height="72" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/academy">Academy</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <ul>
        <li>+1 (727) 201-2012</li>
        <li>
          <Link className="cta" to="/#getting-involved">
            Get Involved
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
