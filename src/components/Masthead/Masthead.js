import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'
import PlayButton from '../PlayButton/PlayButton'

const Masthead = ({ title, description, socials }) => (
  <div className="Masthead">
    <div className="Masthead__Social">
      <div className="Masthead__Social__Container">
        <a href={socials.twitter}>
          <Icon type="twitter" />
        </a>
        <a href={socials.instagram}>
          <Icon type="instagram" />
        </a>
        <a href={socials.facebook}>
          <Icon type="facebook" />
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
