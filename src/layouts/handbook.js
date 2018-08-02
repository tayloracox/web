import React from 'react'
import Head from '../components/Head'
import Header from '../components/Handbook/Header'
import Navigation from '../components/Handbook/Navigation'

const TemplateWrapper = ({ children }) => (
  <div id="outer-container" className="Handbook">
    <Head />
    <Header />
    <div id="page-wrap">
      <Navigation />
      <div className="wrap">
        <main>{children()}</main>
      </div>
    </div>
  </div>
)

export default TemplateWrapper
