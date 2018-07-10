import React from 'react'
import PropTypes from 'prop-types'

import SocialIcon from '../Icon/SocialIcon'

const Social = ({ link, type }) => (
  <a href={link} className={`Social__Belt__Item ${type}`}>
    <SocialIcon type={type} />
  </a>
)

Social.propTypes = {
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
}

export default Social
