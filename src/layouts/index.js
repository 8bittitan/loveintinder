import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/header'
import './index.styl'

class Layout extends Component {
  render() {
    const { children, data } = this.props
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={data.site.siteMetadata.meta}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed|Yesteryear"
            rel="stylesheet"
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children({ ...this.props, socials: data.site.siteMetadata.socials })}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
}

Layout.defaultProps = {
  children: () => {},
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        meta {
          name
          content
        }
        socials {
          twitter
          instagram
          facebook
        }
      }
    }
  }
`
