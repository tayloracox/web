import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { faHeart } from '@fortawesome/fontawesome-pro-solid'

import {
  faFacebook,
  faGithub,
  faMeetup,
  faSlack,
  faTwitter,
  faYoutube,
} from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(faSlack)

const ICONS = {
  facebook: ['fab', 'facebook'],
  github: ['fab', 'github'],
  heart: ['fas', 'heart'],
  meetup: ['fab', 'meetup'],
  slack: ['fab', 'slack'],
  twitter: ['fab', 'twitter'],
  youtube: ['fab', 'youtube'],
}

const Icon = ({ name }) => <FontAwesomeIcon icon={ICONS[name]} />

export default Icon
