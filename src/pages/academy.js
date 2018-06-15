import React from 'react'
import Link from 'gatsby-link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import AcademyNavigation from '../components/AcademyNavigation'

const AcademyPage = () => (
  <div className="AcademyPage">
    <AcademyNavigation />
    <div className="wrap">
      <h2>Web Developent Program</h2>

      <Tabs>
        <TabList>
          <Tab>Our Curriculum</Tab>
          <Tab>Daily Schedule</Tab>
          <Tab>Career Services</Tab>
        </TabList>

        <TabPanel>
          <h3>Our Curriculum</h3>

          <p>
            Our three-month program runs four cohorts per year, starting roughly
            every quarter. We prepare individuals for entry-level jobs as junior
            front-end or back-end web developers. Graduates will be able find
            employment with companies who build and maintain their own websites
            and web applications (i.e. product work), or with agencies that
            produce websites and web applications for other companies (i.e.
            client work).
          </p>
          <p>
            Students will learn client-side (front-end) technology: HTML, CSS,
            and JavaScript as well as server-side (back-end) technology such as
            .NET or Ruby on Rails. At the end of the course, students will be
            able to create beautiful, fully functional websites backed by
            databases and server-side applications.
          </p>

          <h4>Fundamentals</h4>

          <p>
            The first unit of the program will cover fundamental skills for
            software developers. Students will get to know their development
            environment and tools while diving into the core web technologies:
            HTML, CSS, and JavaScript.
          </p>

          <table className="curriculum-info">
            <tbody>
              <tr>
                <th>Background and Basics</th>
                <td>
                  Development environment, text editor, version control & Git,
                  HTML & CSS
                </td>
              </tr>
              <tr>
                <th>Programming Fundamentals</th>
                <td>Syntax, Methods and functions, Control structures</td>
              </tr>
              <tr>
                <th>Paradigms</th>
                <td>
                  <ul>
                    <li>
                      Objects, constructors, and object-oriented programming
                      Anonymous functions
                    </li>
                    <li>Scope, closures, and `this`</li>
                    <li>Asynchronous programming; callbacks and promises</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <h4>Front-end Frameworks</h4>

          <p>
            Going into the second unit, students will get hands-on experience
            with the latest best practices for modern JavaScript development.
            Students will learn about building complex interactive applications
            with React, a popular JavaScript library for building user
            interfaces.
          </p>

          <table className="curriculum-info">
            <tbody>
              <tr>
                <th>Modern JavaScript tooling</th>
                <td>webpack, ES2015+, transpiling, modules, Deploying</td>
              </tr>
              <tr>
                <th>React</th>
                <td>
                  Component driven design, Routing, Managing complex state
                </td>
              </tr>
              <tr>
                <th>Intermediate Web Concepts</th>
                <td>
                  Using data (via JSON), Intermediate CSS, APIs, AJAX, REST
                </td>
              </tr>
            </tbody>
          </table>

          <h4>Back-end Frameworks</h4>

          <p>
            In the final unit, students will round out their full-stack toolkit
            with a exploration of the server- side technologies that power
            applications on the web and mobile devices. Students will be able to
            choose a focus, such as: Ruby on Rails (and the Ruby programming
            language) or .NET (and the C# programming language).
          </p>

          <table className="curriculum-info">
            <tbody>
              <tr>
                <th>Working with servers </th>
                <td>
                  Responding to requests, REST + APIs, Templating Engines,
                  Deploying, MVC
                </td>
              </tr>
              <tr>
                <th>Working with data</th>
                <td>
                  Database Basics, SQL, Migrations, Object Relational Mapping
                </td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <h3>Daily Schedule</h3>

          <table className="daily-schedule">
            <thead>
              <tr>
                <td />
                <th>Monday–Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>09:00&nbsp;AM</th>
                <td>Instructor’s Hour / Warmup Lab</td>
                <td>Career Support Lab</td>
              </tr>
              <tr>
                <th>10:00&nbsp;AM</th>
                <td rowSpan="2">Classroom</td>
                <td>Career Support Lecture</td>
              </tr>
              <tr>
                <th>11:00&nbsp;AM</th>
                <td>Weekly Review (or extended Career Support)</td>
              </tr>
              <tr>
                <th>12:00&nbsp;PM</th>
                <td colSpan="2">Lunch</td>
              </tr>
              <tr>
                <th>01:00&nbsp;PM</th>
                <td colSpan="2">Lab</td>
              </tr>
              <tr>
                <th>02:00&nbsp;PM</th>
                <td>Classroom: “Review at Two”</td>
                <td>Huddles</td>
              </tr>
              <tr>
                <th>03:00&nbsp;PM</th>
                <td rowSpan="2">Lab</td>
                <td rowSpan="3">End of Day / Optional Social Time</td>
              </tr>
              <tr>
                <th>04:00&nbsp;PM</th>
              </tr>
              <tr>
                <th>05:00&nbsp;PM</th>
                <td>End of Day</td>
              </tr>
            </tbody>
          </table>

          <p>
            The day begins at 9am. This time is used by instructors for
            reviewing the previous night’s assignments and planning the day’s
            lecture and activities accordingly. Students use this first hour to
            do warmup exercises and review daily content. At least one
            Instructor will be available for answering questions and guiding
            students through the optional warmups.
          </p>
          <p>
            The day for students really gets going at 10am with two hours of
            class time (lecture, activities, etc.). After lunch is an hour of
            lab time where students will begin work on the day’s assignment. At
            2pm class will reconvene for an hour to reinforce the days concepts
            and answer questions that may arise while working on the assignment.
            Following the review, lab hours continue for the rest of the
            afternoon.
          </p>
          <p>
            Fridays class hour content will be different the rest of the week
            (e.g. Career Support, guest speakers). Fridays end early with
            optional off-campus social time.
          </p>
        </TabPanel>
        <TabPanel>
          <h3>Career Services</h3>

          <p>
            Career support services are including, but not limited to, the
            following:
          </p>
          <ul>
            <li>
              Curriculum including lectures, mentoring, and coaching on
              interview techniques, decoding technical job descriptions, resume
              writing workshops, and portfolio building.
            </li>
            <li>
              Hosted Demo Day events, inviting potential employers, advisory
              board members, and community leaders to showcase the skills and
              work done by recent graduates.
            </li>
            <li>
              Host guest lectures from community leaders on topics that add to
              and enhance the core program content.
            </li>
            <li>
              The school maintains a “reverse job board”, used by local
              employers and hiring partners that lists graduates and alumni who
              are seeking employment.
            </li>
          </ul>

          <p>
            Students are also encouraged to participate and attend developer
            dozens of community events hosted on campus and around town during
            their time in the program. Relationships formed at these events
            often lay the seeds for future employment opportunities.
          </p>

          <p className="note">
            While every effort is made by our team to prepare students for their
            first job as a junior web developer, and to connect them with
            employers and hiring partners through relationships our staff and
            faculty have built in the community, the institution does not
            guarantee employment.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  </div>
)

export default AcademyPage
