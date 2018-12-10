import React from 'react'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Tab from '../../../components/Tab'
import PageHeading from '../../../components/PageHeading'
import AcademyNavigation from '../../../components/AcademyNavigation'

const AcademyTuitionPage = ({ data }) => (
  <div className="AcademyPage Tuition">
    <AcademyNavigation />
    <div className="wrap">
      <PageHeading>Tuition & Financing</PageHeading>
      <ul className="tabs">
        <Tab to="/academy/tuition">Tuition</Tab>
        <Tab to="/academy/tuition/financing">Financing</Tab>
        <Tab to="/academy/tuition/scholarships">Scholarships</Tab>
      </ul>

      <h3>Financing &amp; Payment Options</h3>

      <div className="financeOption">
        <h4>
          <OutboundLink href="https://climbcredit.com/suncoast">
            <Img
              title="Climb Credit"
              alt="Climb Logo"
              resolutions={data.climb.resolutions}
            />
          </OutboundLink>
        </h4>

        <p>
          Climb Credit is a new kind of student lending company which focuses on
          financing career-building programs to help students get a high
          return-on-investment from their education. They believe education is
          an investment toward your future career and earning potential.
        </p>

        <p>Climb Offers:</p>

        <ul>
          <li>
            A quick online application, which can be completed in as little as 5
            minutes with no impact to credit
          </li>

          <li>
            Low, affordable interest-only payments while in school and for a few
            months after to ease your job-search
          </li>

          <li>
            High loan approvals—including financing for students with no credit
          </li>

          <li>
            Instant decisions 90% of the time, with the ability to accept and
            e-sign your documents in just a few clicks
          </li>

          <li>
            Friendly and responsive customer service available by email
            (hello@climbcredit.com), phone (888-510-0533) and instant chat from
            9am to 9pm Eastern
          </li>
        </ul>
        <p className="action">
          <OutboundLink
            className="cta-button"
            href="https://climbcredit.com/suncoast"
          >
            Apply Now
          </OutboundLink>
        </p>
      </div>
      <div className="financeOption">
        <h4>
          <OutboundLink href="https://suncoast.skills.fund/">
            <Img
              title="Skills Fund"
              alt="Skills Fund Logo"
              resolutions={data.skillsFund.resolutions}
            />
          </OutboundLink>
        </h4>

        <p>
          Suncoast Developers Guild has partnered with Skills Fund to remove any
          and all barriers to enrolling in our transformative skills training
          program. Together with Skills Fund, we're proud to offer a simple,
          transparent financing solution that allows you to focus on what
          matters: gaining skills and getting hired.
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
            An application that takes less than ten minutes to complete. Receive
            a credit decision in minutes
          </li>
        </ul>

        <p className="action">
          <OutboundLink
            className="cta-button"
            href="https://suncoast.skills.fund/"
          >
            Learn More and Apply
          </OutboundLink>
        </p>
      </div>

      <div className="financeOption">
        <h4>
          <OutboundLink href="https://loanwell.com/code-school/suncoast">
            <Img
              title="LoanWell"
              alt="LoanWell Logo"
              resolutions={data.loanwell.resolutions}
            />
          </OutboundLink>
        </h4>

        <p>
          We know from first hand experience that Code School is worth the
          investment, so we built LoanWell to help you save thousands towards
          your code school costs. It works like Kickstarter, but instead of
          hoping your community can give you the money, you offer your
          supporters (one or many) the opportunity to lend you the money and get
          paid back. Whether it’s for a new computer or for your entire tuition,
          LoanWell helps you get low or no-interest loans with the support of
          your community.
        </p>

        <p className="action">
          <OutboundLink
            className="cta-button"
            href="https://loanwell.com/code-school/suncoast"
          >
            Learn More
          </OutboundLink>
        </p>
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query FinancingPageQuery {
    climb: imageSharp(id: { regex: "/climb/" }) {
      resolutions(width: 230) {
        ...GatsbyImageSharpResolutions
      }
    }
    loanwell: imageSharp(id: { regex: "/loanwell/" }) {
      resolutions(width: 260) {
        ...GatsbyImageSharpResolutions
      }
    }
    skillsFund: imageSharp(id: { regex: "/skillsfund/" }) {
      resolutions(width: 260) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`

export default AcademyTuitionPage
