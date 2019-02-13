import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../../components/Layout'
import Container from '../../../components/Container'
import Section from '../../../components/Section'
import PageTitle from '../../../components/PageTitle'
import AcademyNavigation from '../../../components/academy/AcademyNavigation'

const TestDriveCourse = () => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>Web Development Test Drive</PageTitle>
        <h4 className="subtitle is-4">Part-time Course</h4>

        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p class="heading">Start Date</p>
              <p class="title is-5">
                March 11<sup>th</sup>, 2019
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p class="heading">End Date</p>
              <p class="title is-5">
                April 17<sup>th</sup>, 2019
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p class="heading">Days</p>
              <p class="title is-5">Monday &amp; Wednesday</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p class="heading">Time</p>
              <p class="title is-5">6:30&ndash;8:30 p.m.</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p class="heading">Fee</p>
              <p class="title is-5">
                $1,999<sup>*</sup>
              </p>
            </div>
          </div>
        </nav>

        <h4 className="title is-4">Course Description</h4>

        <div className="content">
          <p>
            Throughout this six-week course, students learn the basics of
            front-end web development. Students will learn the basic practices,
            fundamentals, and ideas behind creating dynamic websites with HTML,
            CSS, and JavaScript. With a focus on applied knowledge, students
            will get hands-on training using HTML to create semantic pages
            structures, CSS to implement modern designs, and JavaScript to make
            the pages dynamic and interactive. This course can also be utilized
            as a preview to the immersive 12-week program, giving students new
            to development exposure to what the full-time course would feel like
            and a great introduction to being a developer.
          </p>

          <p>
            Classes are for two hours every Monday and Wednesday at 6:30 p.m.
            Optional lab time begins at 5:30 p.m.
          </p>

          <p>
            <sup>*</sup>Group rates are available,{' '}
            <Link to="/contact">contact us</Link> for more information.
          </p>
        </div>

        <div className="columns">
          <div className="column is-three-fifths">
            <h4 className="title is-4">Course Outline</h4>

            <table className="table">
              <tbody>
                <tr>
                  <th>
                    <h5 className="title is-5">Week One</h5>
                    <h6 className="subtitle is-6">HTML and CSS Foundations</h6>
                  </th>
                  <td>
                    <ul>
                      <li>
                        Using a developer environment (Git, IDE, terminal)
                      </li>
                      <li>Deploy a web page</li>
                      <li>Basics of HTML and HTML5</li>
                      <li>Using semantic HTML</li>
                      <li>Using CSS to style a page</li>
                      <li>Using CSS to layout a page</li>
                      <li>
                        How to breakdown and implement a basic webpage design
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Two</h5>
                    <h6 className="subtitle is-6">HTML and CSS Mastery</h6>
                  </th>
                  <td>
                    <ul>
                      <li>Creating Responsive webpages</li>
                      <li>Advanced CSS tricks</li>
                      <li>Using CDNs</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Three</h5>
                    <h6 className="subtitle is-6">
                      Using JavaScript on the Web
                    </h6>
                  </th>
                  <td>
                    <ul>
                      <li>What is the DOM?</li>
                      <li>Using JavaScript on a webpage</li>
                      <li>Control Flow (if, loops, functions)</li>
                      <li>Basic algorithmic thinking</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Four</h5>
                    <h6 className="subtitle is-6">
                      Data Structures and Algorithms
                    </h6>
                  </th>
                  <td>
                    <ul>
                      <li>Arrays</li>
                      <li>Objects</li>
                      <li>Map, filter, reduce</li>
                      <li>Applications of Algorithms</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Five</h5>
                    <h6 className="subtitle is-6">
                      Problem Solving with JavaScript
                    </h6>
                  </th>
                  <td>
                    <ul>
                      <li>Practical application of PEDAC and JavaScript</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Six</h5>
                    <h6 className="subtitle is-6">
                      APIs and Bringing it all Together
                    </h6>
                  </th>
                  <td>
                    <ul>
                      <li>Using an API to get data</li>
                      <li>Building a full website, using APIs</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="column">
            <h4 className="title is-4">Expected Outcomes</h4>

            <div className="content">
              <p>By the end of the course, students should be able to:</p>

              <ul>
                <li>Explain the basic developer workflow</li>
                <li>
                  Implement semnatic HTML to structure a webpage's content
                </li>
                <li>
                  Implement CSS to style and layout a webpage's presentation
                </li>
                <li>
                  Implement JavaScript to manipulate and HTML webpage's behavior
                </li>
                <li>Solve simple problems with JavaScript</li>
                <li>
                  Utilize, using JavaScript, APIs to build data driven websites
                </li>
                <li>Create a website and deploy it to the internet</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default TestDriveCourse
