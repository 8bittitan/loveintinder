import React from 'react'
import PropTypes from 'prop-types'

const Social = ({ link, type, image }) => (
  <a href={link} className={`Social__Belt__Item ${type}`}>
    <img src={image} alt={`Love in Tinder on ${type}`} />
  </a>
)

Social.propTypes = {
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Social
