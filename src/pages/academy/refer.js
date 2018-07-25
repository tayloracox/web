import React from 'react'
import AcademyNavigation from '../../components/AcademyNavigation'
import PageHeading from '../../components/PageHeading'

const AcademyReferPage = () => (
  <div className="AcademyPage Refer">
    <AcademyNavigation />
    <PageHeading hidden>Refer a Guildmate</PageHeading>
    <div className="wrap">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe2SyZuCZsnOeRxxKuLOfbe3g1u8Cw2FiQqSJUy8iUNQ1wrVQ/viewform?embedded=true">
        Loading...
      </iframe>
    </div>
  </div>
)

export default AcademyReferPage
