import React from 'react'
import Link from 'gatsby-link'

const Tab = ({ to, children }) => (
  <li className="tab">
    <Link to={to} exact activeClassName="active">
      {children}
    </Link>
  </li>
)

export default Tab
