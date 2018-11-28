import React from 'react'
import Img from 'gatsby-image'
import Tab from '../../../components/Tab'
import PageHeading from '../../../components/PageHeading'
import AcademyNavigation from '../../../components/AcademyNavigation'
import logoMain from '../../../images/logo.svg'

const AcademyTuitionPage = ({ data }) => (
  <div className="AcademyPage Tuition">
    <AcademyNavigation />
    <div className="wrap">
      <PageHeading>Tuition & Financing</PageHeading>
      <ul className="tabs">
        <ul className="tabs">
          <Tab to="/academy/tuition">Tuition</Tab>
          <Tab to="/academy/tuition/financing">Financing</Tab>
          <Tab to="/academy/tuition/scholarships">Scholarships</Tab>
        </ul>
      </ul>

      <div className="diversity">
        <div className="scholarship-logo">
          <h3>SDG Diversity Scholarship</h3>
          <h4>
            <img
              src={logoMain}
              alt="Suncoast Developers Guild Shield Logo"
              height="100"
            />
          </h4>
        </div>
        <p>
          Suncoast Developers Guild seeks to narrow the gaps in our industry by
          introducing local companies to diverse talent. We offer a scholarship
          of $1,900 to members of communities that are underrepresented in
          technology.
        </p>
        <ul>
          <li>
            This opportunity is available, but not limited to: self-identifying
            women, people of color, individuals with disabilities, and the LGBTQ
            community. Members of all underrepresented groups may apply for this
            scholarship.
          </li>
          <li>
            We will deduct the scholarship amount ($1,900) from the total cost
            of tuition.
          </li>
        </ul>
        <p className="action">
          <a className="cta-button" href="/academy/diversity" target="_blank">
            Apply Today
          </a>
        </p>
      </div>
      <div className="fullstack">
        <div className="scholarship-logo">
          <h3> Full Stack Talent Scholarship</h3>
          <h4>
            <Img
              title="FullStack"
              alt="FullStack Logo"
              resolutions={data.fullStack.resolutions}
            />
          </h4>
        </div>
        <p>
          Full Stack Talent wants to help you further your education with
          Suncoast Developers Guild! We are offering a $500 scholarship for one
          lucky student. Being a technology staffing agency, we understand how
          important technical talent is, and we want to support you while you
          make such a large investment into your future, and become part of the
          Tampa tech ecosystem.
        </p>
        <p className="action">
          <a
            className="cta-button"
            href="https://goo.gl/forms/8GyhAUjsbGbr6Npw2"
            target="_blank"
          >
            Apply Today
          </a>
        </p>
      </div>
      <div className="hanekedesign">
        <div className="scholarship-logo">
          <h3>Haneke Design Scholarship</h3>
          <h4>
            <Img
              title="Haneke"
              alt="Haneke Design Logo"
              resolutions={data.hanekedesign.resolutions}
              target="_blank"
            />
          </h4>
        </div>
        <p>
          Technology education is truly transformative, we’ve witnessed so many
          lives changed for the better. The development world is a welcoming
          place, where skills are valued over anything, but underrepresentation
          is still a problem. Haneke Design believes in the program at SDG and
          hope that we can help lower the barrier of entry to a rewarding,
          lifelong career. We are offering a $1000 scholarship for one woman
          entering the program.
        </p>
        <p className="action">
          <a
            className="cta-button"
            href="https://goo.gl/forms/Gsi3VFOCjKBdZPdX2"
            target="_blank"
          >
            Apply Today
          </a>
        </p>
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query ScholarshipPageQuery {
    fullStack: imageSharp(id: { regex: "/fullstack/" }) {
      resolutions(width: 100) {
        ...GatsbyImageSharpResolutions
      }
    }
    hanekedesign: imageSharp(id: { regex: "/haneke/" }) {
      resolutions(width: 100) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`

export default AcademyTuitionPage
