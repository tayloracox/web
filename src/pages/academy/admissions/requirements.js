import React from 'react'
import Tab from '../../../components/Tab'
import PageHeading from '../../../components/PageHeading'
import AcademyNavigation from '../../../components/AcademyNavigation'

const AcademyAdmissionsPage = () => (
  <div className="AcademyPage Admissions">
    <AcademyNavigation />
    <div className="wrap">
      <PageHeading>Admissions</PageHeading>
      <ul className="tabs">
        <Tab to="/academy/admissions">Application Process</Tab>
        <Tab to="/academy/admissions/requirements">Requirements</Tab>
      </ul>

      <div className="content">
        <h3>Hardware Requirements</h3>

        <p>
          The suggested computer for students is an Apple MacBook Pro laptop
          less than two years old. Minimum requirements:
        </p>

        <ul>
          <li>8GB of RAM</li>
          <li>500GB HDD</li>
          <li>
            macOS High Sierra (10.13) or Windows 10, subject to approval (see
            below)
          </li>
        </ul>

        <p>
          Why a Mac? All of our students being on the same platform enables us
          to move at a much quicker pace. Processes like setting up new tools
          experience reduced friction because the same workflows apply to
          everyone.
        </p>

        <p>
          Additionally, The open source and web development communities are
          invested in tools and libraries that work best with POSIX based
          operating systems like UNIX, Linux, and Apple’s macOS (BSD Unix). In
          short, we believe using the macOS best prepares our students to work
          in the web development industry.
        </p>

        <p>
          Students who choose to study .NET development with us may also find
          substantial benefit from using macOS. A PC laptops can be approved for
          class use on a case by case basis during the interview process.
        </p>

        <h3>Software Requirements</h3>

        <p>
          The tools and materials used in our program are open source and free.
          No additional software is required.
        </p>
      </div>
    </div>
  </div>
)

export default AcademyAdmissionsPage
