import React from 'react'
import PropTypes from 'prop-types'

import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../stylesheets/screen.scss'

const TemplateWrapper = ({ children }) => (
  <div id="outer-container">
    <Head />
    <Header />
    <div id="page-wrap">{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
