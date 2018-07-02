import React from 'react'
import Img from 'gatsby-image'

import AcademyNavigation from '../../components/AcademyNavigation'

const AcademyTuitionPage = ({ data }) => (
  <div className="AcademyPage Tuition">
    <AcademyNavigation />
    <div className="wrap">
      <h2>Tuition & Financing</h2>

      <p>
        Tuition is a flat fee of $14,900 for the entire three-month program. The
        tuition does not include any costs associated with parking, meals, or
        any other fees not specifically provided for in this catalog or the
        enrollment agreement. The tuition does not include any costs that may be
        required for, or associated with, the purchase of a laptop computer.
      </p>

      <h3>Payment</h3>

      <p>
        After being accepted in to the program, you can reserve a seat in our
        course with a deposit of $1,000. The entire amount of the deposit will
        be applied to your tuition balance, and the remaining funds will be due
        before the first day of class. Payment can be made by check, money
        order, debit, or credit card.
      </p>

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
          bootcamps (tuition, equipment costs, and/or living expenses) through
          low-interest friends and family loans. Students are also able to split
          their total financing need into small chunks (think $500) allowing
          several of their friends and family to contribute as a group. You can
          also decide to get a friends and family loan for a specific expense
          like a computer or the first month of living expenses. If the student
          is not able to get all the funding they need from friends and family,
          we have great lending partners that provide the additional capital
          that they need.
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
  }
`

export default AcademyTuitionPage
