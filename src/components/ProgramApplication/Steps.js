import React from 'react'
import cx from 'classnames'

const Steps = ({ step }) => (
  <nav className="steps">
    <ol>
      <li className={cx({ complete: step > 0, current: step === 0 })}>
        Contact Information
      </li>
      <li className={cx({ complete: step > 1, current: step === 1 })}>
        Program Start
      </li>
      <li className={cx({ complete: step > 2, current: step === 2 })}>
        Your Background
      </li>
      <li className={cx({ complete: step > 3, current: step === 3 })}>
        Just a Bit More
      </li>
      <li className={cx({ complete: step > 4, current: step === 4 })}>
        All Done!
      </li>
    </ol>
  </nav>
)

export default Steps
