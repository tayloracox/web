import React from 'react'
import Helmet from 'react-helmet'
import config from '../../gatsby-config'

const { title, description, siteUrl } = config.siteMetadata

const Head = () => (
  <Helmet
    title="Suncoast Developers Guild"
    meta={[
      { name: 'description', content: description },
      {
        name: 'keywords',
        content:
          'sdg, Tampa Bay, Code School, St Petersburg, Academy, Programming, Development, Suncoast',
      },
      { name: 'description', content: description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:site', content: '@suncoastio' },
      { name: 'twitter:creator', content: '@suncoastio' },
      { name: 'twitter:image', content: `${siteUrl}/assets/1024-512.png` },
      { property: 'og:title', content: title },
      { property: 'og:description', name: 'description', content: description },
      { property: 'og:image', content: `${siteUrl}/assets/1200-630.png` },
      { property: 'og:url', content: siteUrl },
      { property: 'og:site_name', content: title },
      { property: 'og:locale', name: 'locale', content: 'en_US' },
      { property: 'fb:admins', content: '365336690280273' },
      { property: 'fb:app_id', content: '228326264426970' },
      { property: 'og:type', content: 'website' },
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
      {
        rel: 'alternate',
        href: `${siteUrl}/feed.json`,
        title: title,
        type: 'application/json',
      },
      {
        rel: 'alternate',
        href: `${siteUrl}/rss.xml`,
        type: 'application/rss+xml',
      },
      {
        rel: 'alternate',
        href: `${siteUrl}/atom.xml`,
        type: 'application/atom+xml',
      },
    ]}
  />
)

export default Head
