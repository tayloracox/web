import React from 'react'
import NavTab from '../NavTab'

const TuitionNavigation = () => (
  <div className="tabs">
    <ul>
      <NavTab to="/academy/tuition">Tuition</NavTab>
      <NavTab to="/academy/tuition/financing">Financing</NavTab>
      <NavTab to="/academy/tuition/scholarships">Scholarships</NavTab>
      <NavTab to="/academy/admissions">Application Process</NavTab>
      <NavTab to="/academy/admissions/requirements">Requirements</NavTab>
    </ul>
  </div>
)

export default TuitionNavigation
