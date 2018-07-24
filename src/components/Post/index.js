import React from 'react'
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

import Icon from '../Icon'

export default ({ data }) => {
  const { markdownRemark: post } = data
  const url = `${data.site.siteMetadata.siteUrl}/blog${post.fields.slug}`
  const iconSize = 32
  return (
    <div className="BlogPage Post">
      <div className="wrap">
        <header>
          <h1>{post.frontmatter.title}</h1>
          <div className="meta">
            <div>
              <Icon name="calendar" />{' '}
              <time>
                {moment(post.frontmatter.published_on).format('MMMM Do YYYY')}
              </time>
            </div>
            <div>
              <Icon name="user" /> <span>{post.frontmatter.author}</span>
            </div>
          </div>
        </header>
        <figure className="featured">
          <Image sizes={post.fields.image.childImageSharp.sizes} />
        </figure>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="social-links">
          <RedditShareButton url={url} title={post.frontmatter.title}>
            <RedditIcon round size={iconSize} />
          </RedditShareButton>
          <TwitterShareButton url={url} title={post.frontmatter.title}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={post.frontmatter.summary}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title={post.frontmatter.title}
            description={post.frontmatter.summary}
          >
            <LinkedinIcon round size={iconSize} />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        published_on
        author
      }
      fields {
        slug
        image {
          childImageSharp {
            sizes(maxWidth: 960) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
