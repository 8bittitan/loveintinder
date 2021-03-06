import React from 'react'
import PropTypes from 'prop-types'

const ScrollLink = ({ href, children, openCloseNav }) => {
  const scrollToSection = evt => {
    evt.preventDefault()
    const section = evt.target.getAttribute('href')

    document.querySelector(section).scrollIntoView({
      behavior: 'smooth',
    })

    if (openCloseNav) {
      openCloseNav()
    }
  }

  return (
    <a href={href} onClick={scrollToSection}>
      {children}
    </a>
  )
}

ScrollLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  openCloseNav: PropTypes.func,
}

ScrollLink.defaultProps = {
  openCloseNav: false,
}

export default ScrollLink
