import React from 'react'
import PropTypes from 'prop-types'

import PlayButton from '../PlayButton/PlayButton'

import Twitter from '../../images/003-twitter.svg'
import Instagram from '../../images/002-instagram.svg'
import Facebook from '../../images/001-facebook.svg'

const Masthead = ({ title, description, socials }) => (
  <div className="Masthead">
    <div className="Masthead__Social">
      <div className="Masthead__Social__Container">
        {/* TODO: Use these as real SVG */}
        <a href={socials.twitter}>
          <img src={Twitter} alt="Share on Twitter" />
        </a>
        <a href={socials.instagram}>
          <img src={Instagram} alt="Share on Instagram" />
        </a>
        <a href={socials.facebook}>
          <img src={Facebook} alt="Share on Facebook" />
        </a>
      </div>
    </div>
    <div className="Masthead__Content">
      <h1>{title}</h1>
      <p>{description}</p>
      <PlayButton />
    </div>
  </div>
)

Masthead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Masthead
