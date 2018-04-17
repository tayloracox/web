import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../stylesheets/screen.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Suncoast Developers Guild"
      meta={[
        { name: 'description', content: 'Suncoast Developers Guild' },
        {
          name: 'keywords',
          content:
            'sdg, Tampa Bay, Code School, St Petersburg, Academy, Programming, Development, Suncoast',
        },
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
