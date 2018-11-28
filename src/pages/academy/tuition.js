import React from 'react'
import Tab from '../../components/Tab'
import PageHeading from '../../components/PageHeading'
import AcademyNavigation from '../../components/AcademyNavigation'

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

      <h3>Program Tuition</h3>

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
    </div>
  </div>
)

export default AcademyTuitionPage
