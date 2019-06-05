import React from 'react'
import Image from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Icon from '../../components/Icon'

const Graduate = ({ student, description, tagLine, hireable }) => (
  <React.Fragment>
    <div className="columns demo-day-graduate">
      <div className="column is-narrow has-text-centered">
        {student.image && (
          <Image
            className="image"
            Tag="p"
            fixed={student.image.fixed}
            alt={student.image.description}
          />
        )}
      </div>
      <div className="column">
        <h4 className="title is-4">{student.name}</h4>
        <h5
          className="subtitle is-5"
          dangerouslySetInnerHTML={{
            __html: tagLine,
          }}
        />
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: description ? description.childMarkdownRemark.html : '',
          }}
        />
        <nav className="level">
          <div className="level-left">
            {hireable && (
              <p className="level-item">
                <span className="tag is-primary">Availble for Hire</span>
              </p>
            )}
          </div>
          <div className="level-right">
            <div className="level-item social-links">
              {student.github && (
                <OutboundLink href={`https://github.com/${student.github}`}>
                  <Icon i="fab fa-github fa-lg" />
                </OutboundLink>
              )}
              {student.portfolioUrl && (
                <OutboundLink href={student.portfolioUrl}>
                  <Icon i="fas fa-suitcase fa-lg" />
                </OutboundLink>
              )}
              {student.email && (
                <OutboundLink href={`mailto:${student.email}`}>
                  <Icon i="fas fa-envelope fa-lg" />
                </OutboundLink>
              )}
              {student.linkedIn && (
                <OutboundLink
                  href={`https://www.linkedin.com/in/${student.linkedIn}/`}
                >
                  <Icon i="fab fa-linkedin fa-lg" />
                </OutboundLink>
              )}
              {student.twitter && (
                <OutboundLink href={`https://twitter.com/${student.twitter}`}>
                  <Icon i="fab fa-twitter fa-lg" />
                </OutboundLink>
              )}
              {student.blogUrl && (
                <OutboundLink href={student.blogUrl}>
                  <Icon
                    i={
                      student.blogUrl.includes('medium.com')
                        ? 'fab fa-medium fa-lg'
                        : 'fas fa-blog fa-lg'
                    }
                  />
                </OutboundLink>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
    <hr />
  </React.Fragment>
)

export default Graduate
