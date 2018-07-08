import React from 'react'
import Link from 'gatsby-link'

import ScrollLink from '../ScrollLink/ScrollLink'

import logo from '../../images/logo-full.svg'

import './header.styl'

const Header = () => (
  <header className="Header">
    <div className="outer-container Header__Container">
      <Link to="/" className="Header__Logo">
        <img src={logo} alt="Love in Tinder" />
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
