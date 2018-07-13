import React from 'react'
import PropTypes from 'prop-types'

import SocialIcon from '../Icon/SocialIcon'

const Social = ({ link, type }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`Social__Belt__Item ${type}`}
  >
    <SocialIcon type={type} />
  </a>
)

Social.propTypes = {
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Social
