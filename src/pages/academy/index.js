import React from 'react'
import Tab from '../../components/Tab'
import AcademyNavigation from '../../components/AcademyNavigation'
import PageHeading from '../../components/PageHeading'

const AcademyPage = () => (
  <div className="AcademyPage">
    <AcademyNavigation />
    <div className="wrap">
      <PageHeading>Web Development Program</PageHeading>
      <ul className="tabs">
        <Tab to="/academy">Our Curriculum</Tab>
        <Tab to="/academy/schedule">Daily Schedule</Tab>
        <Tab to="/academy/career">Career Services</Tab>
      </ul>

      <h3>Our Curriculum</h3>

      <p>
        Our three-month program runs four cohorts per year, starting roughly
        every quarter. We prepare individuals for entry-level jobs as junior
        front-end or back-end web developers. Graduates will be able find
        employment with companies who build and maintain their own websites and
        web applications (i.e. product work), or with agencies that produce
        websites and web applications for other companies (i.e. client work).
      </p>
      <p>
        Students will learn client-side (front-end) technology: HTML, CSS, and
        JavaScript as well as server-side (back-end) technology such as .NET or
        Ruby on Rails. At the end of the course, students will be able to create
        beautiful, fully functional websites backed by databases and server-side
        applications.
      </p>

      <h4>Fundamentals</h4>

      <p>
        The first unit of the program will cover fundamental skills for software
        developers. Students will get to know their development environment and
        tools while diving into the core web technologies: HTML, CSS, and
        JavaScript.
      </p>

      <table className="curriculum-info">
        <tbody>
          <tr>
            <th>Background and Basics</th>
            <td>
              Development environment, text editor, version control & Git, HTML
              & CSS
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
        Going into the second unit, students will get hands-on experience with
        the latest best practices for modern JavaScript development. Students
        will learn about building complex interactive applications with React, a
        popular JavaScript library for building user interfaces.
      </p>

      <table className="curriculum-info">
        <tbody>
          <tr>
            <th>Modern JavaScript tooling</th>
            <td>webpack, ES2015+, transpiling, modules, Deploying</td>
          </tr>
          <tr>
            <th>React</th>
            <td>Component driven design, Routing, Managing complex state</td>
          </tr>
          <tr>
            <th>Intermediate Web Concepts</th>
            <td>Using data (via JSON), Intermediate CSS, APIs, AJAX, REST</td>
          </tr>
        </tbody>
      </table>

      <h4>Back-end Frameworks</h4>

      <p>
        In the final unit, students will round out their full-stack toolkit with
        a exploration of the server- side technologies that power applications
        on the web and mobile devices. Students will be able to choose a focus,
        such as: Ruby on Rails (and the Ruby programming language) or .NET (and
        the C# programming language).
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
            <td>Database Basics, SQL, Migrations, Object Relational Mapping</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default AcademyPage
