import React from 'react'
import PropTypes from 'prop-types'

import Head from '../components/Head'
import Header from '../components/Header'

const TemplateWrapper = ({ children }) => (
  <div className="form-embed" id="outer-container">
    <Head />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
