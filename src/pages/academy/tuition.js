import React from 'react'
import Img from 'gatsby-image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import PageHeading from '../../components/PageHeading'
import AcademyNavigation from '../../components/AcademyNavigation'
import logoMain from '../../images/logo.svg'

const AcademyTuitionPage = ({ data }) => (
  <div className="AcademyPage Tuition">
    <AcademyNavigation />
    <div className="wrap">
      <PageHeading>Tuition & Financing</PageHeading>
      <Tabs>
        <TabList>
          <Tab>Tuition</Tab>
          <Tab>Financing</Tab>
          <Tab>Scholarships</Tab>
        </TabList>
        <TabPanel>
          <p>
            Tuition is a flat fee of $14,900 for the entire three-month program.
            The tuition does not include any costs associated with parking,
            meals, or any other fees not specifically provided for in this
            catalog or the enrollment agreement. The tuition does not include
            any costs that may be required for, or associated with, the purchase
            of a laptop computer.
          </p>

          <h3>Payment</h3>

          <p>
            After being accepted in to the program, you can reserve a seat in
            our course with a deposit of $1,000. The entire amount of the
            deposit will be applied to your tuition balance, and the remaining
            funds will be due before the first day of class. Payment can be made
            by check, money order, debit, or credit card.
          </p>
        </TabPanel>
        <TabPanel>
          <h3>Financing &amp; Payment Options</h3>

          <div className="financeOption">
            <h4>
              <Img
                title="Climb Credit"
                alt="Climb Logo"
                resolutions={data.climb.resolutions}
              />
            </h4>

            <p>
              Climb Credit is a new kind of student lending company which
              focuses on financing career-building programs to help students get
              a high return-on-investment from their education. They believe
              education is an investment toward your future career and earning
              potential.
            </p>

            <p>Climb Offers:</p>

            <ul>
              <li>
                A quick online application, which can be completed in as little
                as 5 minutes with no impact to credit
              </li>

              <li>
                Low, affordable interest-only payments while in school and for a
                few months after to ease your job-search
              </li>

              <li>
                High loan approvals—including financing for students with no
                credit
              </li>

              <li>
                Instant decisions 90% of the time, with the ability to accept
                and e-sign your documents in just a few clicks
              </li>

              <li>
                Friendly and responsive customer service available by email
                (hello@climbcredit.com), phone (888-510-0533) and instant chat
                from 9am to 9pm Eastern
              </li>
            </ul>
            <p className="action">
              <a className="cta-button" href="https://climbcredit.com/suncoast">
                Apply Now
              </a>
            </p>
          </div>
          <div className="financeOption">
            <h4>
              <Img
                title="Skills Fund"
                alt="Skills Fund Logo"
                resolutions={data.skillsFund.resolutions}
              />
            </h4>

            <p>
              Suncoast Developers Guild has partnered with Skills Fund to remove
              any and all barriers to enrolling in our transformative skills
              training program. Together with Skills Fund, we're proud to offer
              a simple, transparent financing solution that allows you to focus
              on what matters: gaining skills and getting hired.
            </p>

            <p>What To Expect From Skills Fund:</p>
            <ul>
              <li>A process radically different from traditional loans</li>
              <li>
                The peace of mind that comes with knowing your rate and monthly
                repayment before you apply
              </li>
              <li>One upfront interest rate for all students</li>
              <li>Low, interest-only payments</li>
              <li>
                An application that takes less than ten minutes to complete.
                Receive a credit decision in minutes
              </li>
            </ul>

            <p className="action">
              <a className="cta-button" href="https://suncoast.skills.fund/">
                Learn More and Apply
              </a>
            </p>
          </div>

          <div className="financeOption">
            <h4>
              <Img
                title="Loanable"
                alt="Loanable Logo"
                resolutions={data.loanable.resolutions}
              />
            </h4>

            <p>
              Loanable helps students get the financing they need for coding
              bootcamps (tuition, equipment costs, and/or living expenses)
              through low-interest friends and family loans. Students are also
              able to split their total financing need into small chunks (think
              $500) allowing several of their friends and family to contribute
              as a group. You can also decide to get a friends and family loan
              for a specific expense like a computer or the first month of
              living expenses. If the student is not able to get all the funding
              they need from friends and family, we have great lending partners
              that provide the additional capital that they need.
            </p>

            <p className="action">
              <a
                className="cta-button"
                href="https://loanable.io/code-school/suncoast."
              >
                Learn More
              </a>
            </p>
          </div>
        </TabPanel>
        <TabPanel>
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
              Suncoast Developers Guild seeks to narrow the gaps in our industry
              by introducing local companies to diverse talent. We offer a
              scholarship of $1,900 to members of communities that are
              underrepresented in technology.
            </p>
            <ul>
              <li>
                This opportunity is available, but not limited to:
                self-identifying women, people of color, individuals with
                disabilities, and the LGBTQ community. Members of all
                underrepresented groups may apply for this scholarship.
              </li>
              <li>
                We will deduct the scholarship amount ($1,900) from the total
                cost of tuition.
              </li>
            </ul>
            <p className="action">
              <a
                className="cta-button"
                href="/academy/diversity"
                target="_blank"
              >
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
              Suncoast Developers Guild! We are offering a $500 scholarship for
              one lucky student. Being a technology staffing agency, we
              understand how important technical talent is, and we want to
              support you while you make such a large investment into your
              future, and become part of the Tampa tech ecosystem.
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
              Haneke Design wants to help you further your education with
              Suncoast Developers Guild! We are offering a $1000 scholarship for
              one lucky student. Women, U.S. military veterans, and populations
              underrepresented in technology are eligible to apply.
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
        </TabPanel>
      </Tabs>
    </div>
  </div>
)

export const pageQuery = graphql`
  query TuitionPageQuery {
    climb: imageSharp(id: { regex: "/climb/" }) {
      resolutions(width: 230) {
        ...GatsbyImageSharpResolutions
      }
    }
    loanable: imageSharp(id: { regex: "/loanable/" }) {
      resolutions(width: 260) {
        ...GatsbyImageSharpResolutions
      }
    }
    skillsFund: imageSharp(id: { regex: "/skillsfund/" }) {
      resolutions(width: 260) {
        ...GatsbyImageSharpResolutions
      }
    }
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
