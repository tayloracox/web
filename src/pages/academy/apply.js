import React from 'react'
import AcademyNavigation from '../../components/AcademyNavigation'
import PageHeading from '../../components/PageHeading'

const AcademyApplyPage = () => (
  <div className="AcademyPage Apply">
    <AcademyNavigation />
    <PageHeading hidden>Web Development Program Application</PageHeading>
    <div className="wrap">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd2ZJsD6RqOnGq2lAYz9DDD7JZ5hjKDvUXxeG3AraQFeyctbw/viewform?embedded=true">
        Loading...
      </iframe>
    </div>
  </div>
)

export default AcademyApplyPage
