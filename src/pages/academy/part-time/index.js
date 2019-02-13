import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../../components/Layout'
import Container from '../../../components/Container'
import Section from '../../../components/Section'
import PageTitle from '../../../components/PageTitle'
import AcademyNavigation from '../../../components/academy/AcademyNavigation'

const PartTimeCourses = () => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>Part-Time Courses</PageTitle>
        <div className="content">
          <p>
            Our <Link to="/academy">Web Development Program</Link> is an
            immersive, full-time program designed to prepare you for a career in
            software development. However, we realize that the cost and time
            commitment required for the program isn't for everyone.
          </p>
          <p>
            If you're just curious and want to dip your toes in web development
            or if you're an experienced programmer looking to upskill in
            specific areas, one of our part-time courses might be right for you.
          </p>
        </div>
        <div>
          <article className="columns">
            <div className="column">
              <div className="media">
                <div className="media-left is-hidden-mobile">
                  <figure className="image is-128x128">
                    <Link to="/academy/part-time/test-drive">
                      <img src="https://via.placeholder.com/128" alt="" />
                    </Link>
                  </figure>
                </div>
                <div className="media-content">
                  <h3 className="title is-3">
                    <Link to="/academy/part-time/test-drive">
                      Web Development Test Drive
                    </Link>
                  </h3>
                  <div className="subtitle tags">
                    <span className="tag">6 WEEKS</span>
                    <span className="tag">BEGINNER</span>
                  </div>
                  <div className="level is-block-mobile is-hidden-tablet">
                    <div className="level-item">
                      <figure className="image is-128x128">
                        <Link to="/academy/part-time/test-drive">
                          <img src="https://via.placeholder.com/128" alt="" />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure facere perspiciatis aliquam ea, non vitae autem
                      inventore repellendus saepe dolor iste. Modi architecto
                      excepturi dolorum rerum hic illum maiores dolor!{' '}
                      <Link to="/academy/part-time/test-drive">Learn More</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-narrow">
              <nav className="level">
                <div className="level-item">
                  <div className="has-text-centered">
                    <div className="calendar-date">
                      <span className="month">Mar</span>
                      <span className="day">11</span>
                    </div>
                    <div>
                      <span className="tag">Mon</span>{' '}
                      <span className="tag">Wed</span>
                    </div>
                    <div className="time is-size-7 content">
                      <p>6:30 - 8:30 PM</p>
                    </div>
                    <button className="button is-primary">Register</button>
                  </div>
                </div>
              </nav>
            </div>
          </article>
          <hr />
          <article className="media">
            <div className="media-left">
              <figure className="image is-100by100">
                <img src="https://via.placeholder.com/100" alt="" />
              </figure>
            </div>
            <div className="media-content">
              <h3 className="title is-3">
                React I: Building Interactive Websites
              </h3>
              <div className="subtitle tags">
                <span className="tag">6 WEEKS</span>
                <span className="tag">INTERMEDIATE</span>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  facere perspiciatis aliquam ea, non vitae autem inventore
                  repellendus saepe dolor iste. Modi architecto excepturi
                  dolorum rerum hic illum maiores dolor!{' '}
                  <Link to="...">Learn More</Link>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div>Mar 11</div>
              <div>
                <span className="tag">Saturday</span>
              </div>
              <div>6:30 PM</div>
              <button className="button is-primary">Register</button>
            </div>
          </article>
        </div>
        <hr />
        <article className="message is-primary is-small">
          <div className="message-body content">
            <p>
              Our part-time courses are for personal and professional
              development. They award no credentials nor do they include any
              support services. If you're looking to fast-track a career change,
              You might be interested in our full-time, immersive{' '}
              <Link to="/academy">Web Development Program</Link>.
            </p>
            <p>
              No matter which course offering is right for you; passion,
              dedication, and hard work will put you on the path to being the
              best software developer you can be.
            </p>
          </div>
        </article>
      </Container>
    </Section>
  </Layout>
)

export default PartTimeCourses
