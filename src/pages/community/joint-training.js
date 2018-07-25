import React from 'react'
import CommunityNavigation from '../../components/CommunityNavigation'
import PageHeading from '../../components/PageHeading'

const JointTrainingApplyPage = () => (
  <div className="CommunityPage Apply">
    <CommunityNavigation />
    <PageHeading hidden>Joint Training</PageHeading>
    <div className="wrap">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSexq2nxkn3Hb6wXUTPI6JQYRev9H4Xcl875vyYuRIJVhVT9Xw/viewform?embedded=true">
        Loading...
      </iframe>
    </div>
  </div>
)

export default JointTrainingApplyPage
