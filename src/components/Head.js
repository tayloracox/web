import React from 'react'
import Helmet from 'react-helmet'

const Head = () => (
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
)

export default Head
