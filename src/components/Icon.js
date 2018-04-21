import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {
  faCode,
  faGraduationCap,
  faHandshakeAlt,
  faHeart,
  faPuzzlePiece,
} from '@fortawesome/fontawesome-pro-solid'

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
  faHandshakeAlt,
  faHeart,
  faMeetup,
  faPuzzlePiece,
  faSlack,
  faTwitter,
  faYoutube
)

const ICONS = {
  admissions: ['fas', 'graduation-cap'],
  apply: ['fas', 'graduation-cap'],
  facebook: ['fab', 'facebook'],
  faq: ['fas', 'puzzle-piece'],
  github: ['fab', 'github'],
  heart: ['fas', 'heart'],
  meetup: ['fab', 'meetup'],
  network: ['fas', 'handshake-alt'],
  program: ['fas', 'code'],
  slack: ['fab', 'slack'],
  twitter: ['fab', 'twitter'],
  youtube: ['fab', 'youtube'],
}

const Icon = ({ name }) => <FontAwesomeIcon icon={ICONS[name]} />

export default Icon
