import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'
import PlayButton from '../PlayButton/PlayButton'

const Masthead = ({ episode, socials, selectEpisode }) => {
  const setCurrentEpisode = () => {
    selectEpisode(episode.guid, episode.enclosure.url)
  }

  return (
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
        <h1>{episode.title}</h1>
        <p>{episode.contentSnippet}</p>
        <PlayButton selectEpisode={setCurrentEpisode} />
      </div>
    </div>
  )
}

Masthead.propTypes = {
  episode: PropTypes.shape({
    guid: PropTypes.string,
    title: PropTypes.string,
    contentSnippet: PropTypes.string,
  }).isRequired,
  socials: PropTypes.shape().isRequired,
  selectEpisode: PropTypes.func.isRequired,
}

export default Masthead
