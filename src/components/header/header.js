import React, { Component } from 'react'
import Link from 'gatsby-link'

import Icon from '../Icon/Icon'
import ScrollLink from '../ScrollLink/ScrollLink'

import './header.styl'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nav: 'closed',
    }

    this.openCloseNav = this.openCloseNav.bind(this)
  }

  openCloseNav() {
    const { nav } = this.state

    if (window.innerWidth <= 420) {
      this.setState({
        nav: nav === 'closed' ? 'open' : 'closed',
      })
    }
  }

  render() {
    const { nav } = this.state
    return (
      <header className="Header">
        <div className="outer-container Header__Container">
          <Link to="/" className="Header__Logo">
            <Icon type="logo-full" />
          </Link>

          <div className={`Header__Nav ${nav}`}>
            <ScrollLink openCloseNav={this.openCloseNav} href="#episodes">
              Episodes
            </ScrollLink>
            <ScrollLink openCloseNav={this.openCloseNav} href="#social">
              Social
            </ScrollLink>
            <ScrollLink openCloseNav={this.openCloseNav} href="#about">
              About
            </ScrollLink>
          </div>

          <div
            className="Header__Menu"
            onClick={this.openCloseNav}
            onKeyDown={evt => {
              if (evt.which === 191) {
                this.openCloseNav()
              }
            }}
            role="button"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
