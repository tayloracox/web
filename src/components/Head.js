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
    link={[
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ]}
  />
)

export default Head
