import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  faCode,
  faComment,
  faGraduationCap,
  faHandshake,
  faHeart,
  faLaptop,
  faMoneyCheck,
  faPuzzlePiece,
} from '@fortawesome/fontawesome-free-solid'

import {
  faFacebook,
  faGithub,
  faMeetup,
  faSlack,
  faTwitter,
  faYoutube,
} from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(
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
  faYoutube
)

const ICONS = {
  admissions: ['fas', 'graduation-cap'],
  apply: ['fas', 'laptop'],
  facebook: ['fab', 'facebook'],
  faq: ['fas', 'puzzle-piece'],
  github: ['fab', 'github'],
  heart: ['fas', 'heart'],
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
  'joint-training': ['fas', 'laptop'],
  hiring: ['fas', 'user-plus'],
}

const Icon = ({ name }) => <FontAwesomeIcon icon={ICONS[name]} />

export default Icon
