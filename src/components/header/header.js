import React from 'react'
import Link from 'gatsby-link'

import Icon from '../Icon/Icon'
import ScrollLink from '../ScrollLink/ScrollLink'

import './header.styl'

const Header = () => (
  <header className="Header">
    <div className="outer-container Header__Container">
      <Link to="/" className="Header__Logo">
        <Icon type="logo-full" />
      </Link>

      <div className="Header__Nav">
        <ScrollLink href="#episodes">Episodes</ScrollLink>
        <ScrollLink href="#social">Social</ScrollLink>
        <ScrollLink href="#about">About</ScrollLink>
      </div>

      <div className="Header__Menu">
        <span />
        <span />
        <span />
      </div>
    </div>
  </header>
)

export default Header
