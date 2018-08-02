import React from 'react'
import Helmet from 'react-helmet'
import Image from 'gatsby-image'
import moment from 'moment'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'

import Icon from './Icon'

export default ({ data }) => {
  const { markdownRemark: post } = data
  const { siteUrl, title: siteTitle } = data.site.siteMetadata
  const url = `${siteUrl}/blog${post.fields.slug}`
  const pageTitle = `${post.frontmatter.title} @ ${siteTitle}`
  const shareTitle = `"${post.frontmatter.title}" from the blog @ ${siteTitle}`
  const iconSize = 32
  return (
    <div className="BlogPage Post">
      <div className="wrap">
        <header>
          <h1>{post.frontmatter.title}</h1>
          <div className="meta">
            <div className="publish-date">
              <Icon name="calendar" />{' '}
              <time>
                {moment(post.frontmatter.date).format('MMMM Do YYYY')}
              </time>
            </div>
            <div className="author">
              <Icon name="user" /> <span>{post.frontmatter.author}</span>
            </div>
          </div>
        </header>
        <figure className="featured">
          <Image sizes={post.fields.image.childImageSharp.feature} />
        </figure>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="social-links">
          <RedditShareButton url={url} title={post.frontmatter.title}>
            <RedditIcon round size={iconSize} />
          </RedditShareButton>
          <TwitterShareButton url={url} title={post.frontmatter.title}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={post.frontmatter.description}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
          >
            <LinkedinIcon round size={iconSize} />
          </LinkedinShareButton>
        </div>
      </div>
      <Helmet
        title={pageTitle}
        meta={[
          {
            name: 'twitter:title',
            content: shareTitle,
          },
          {
            name: 'twitter:description',
            content: post.frontmatter.description,
          },
          {
            name: 'twitter:image',
            content: siteUrl + post.fields.image.childImageSharp.twitter.src,
          },
          {
            property: 'og:title',
            name: 'title',
            content: shareTitle,
          },
          {
            property: 'og:description',
            name: 'description',
            content: post.frontmatter.description,
          },
          {
            property: 'og:image',
            name: 'image',
            content: siteUrl + post.fields.image.childImageSharp.openGraph.src,
          },
          { property: 'og:url', name: 'url', content: url },
        ]}
      />
    </div>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        title
        date
        author
      }
      fields {
        slug
        image {
          childImageSharp {
            feature: sizes(maxWidth: 960) {
              ...GatsbyImageSharpSizes
            }
            twitter: resolutions(width: 1024, height: 512) {
              src
            }
            openGraph: resolutions(width: 1200, height: 630) {
              src
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
  }
`
