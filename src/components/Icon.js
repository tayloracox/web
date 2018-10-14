import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

import {
  faBars,
  faCalendar,
  faCode,
  faComment,
  faGraduationCap,
  faHandshake,
  faHeart,
  faLaptop,
  faMoneyCheck,
  faPuzzlePiece,
  faUser,
} from '@fortawesome/fontawesome-free-solid'

import {
  faFacebook,
  faGithub,
  faMeetup,
  faSlack,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/fontawesome-free-brands'

library.add(
  faBars,
  faCalendar,
  faCode,
  faFacebook,
  faGithub,
  faGraduationCap,
  faHandshake,
  faHeart,
  faLaptop,
  faMeetup,
  faMoneyCheck,
  faPuzzlePiece,
  faSlack,
  faTwitter,
  faUser,
  faYoutube
)

const ICONS = {
  admissions: ['fas', 'graduation-cap'],
  apply: ['fas', 'laptop'],
  bars: ['fas', 'bars'],
  calendar: ['fas', 'calendar'],
  facebook: ['fab', 'facebook'],
  faq: ['fas', 'puzzle-piece'],
  github: ['fab', 'github'],
  heart: ['fas', 'heart'],
  instagram: ['fab', 'instagram'],
  jr: ['fas', 'chalkboard-teacher'],
  linkedin: ['fab', 'linkedin'],
  meetup: ['fab', 'meetup'],
  network: ['fas', 'handshake'],
  program: ['fas', 'code'],
  referrals: ['fas', 'comment'],
  slack: ['fab', 'slack'],
  success: ['fas', 'heart'],
  tuition: ['fas', 'money-check'],
  twitter: ['fab', 'twitter'],
  youtube: ['fab', 'youtube'],
  organizations: ['fas', 'users'],
  sponsors: ['fas', 'handshake'],
  jointTraining: ['fas', 'laptop'],
  hiring: ['fas', 'user-plus'],
  user: ['fas', 'user'],
}

const Icon = ({ name }) => (
  <span className="icon">
    <FontAwesomeIcon icon={ICONS[name]} size="lg" />
  </span>
)

export default Icon
