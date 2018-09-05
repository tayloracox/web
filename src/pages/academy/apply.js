import React from 'react'
import AcademyNavigation from '../../components/AcademyNavigation'
import PageHeading from '../../components/PageHeading'
import ProgramApplication from '../../components/ProgramApplication'

const AcademyApplyPage = () => (
  <div className="AcademyPage Apply">
    <AcademyNavigation />
    <div className="wrap">
      <PageHeading>Web Development Program Application</PageHeading>
      <ProgramApplication />
    </div>
  </div>
)

export default AcademyApplyPage
