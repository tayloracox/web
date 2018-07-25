import React from 'react'
import Link from 'gatsby-link'
import PageHeading from '../components/PageHeading'

const ThanksPage = () => (
  <div className="ThanksPage">
    <div className="wrap">
      <PageHeading>Thanks!</PageHeading>
      <p>
        <Link to="/">We'll be in touch&hellip;</Link>
      </p>
    </div>
  </div>
)

export default ThanksPage
