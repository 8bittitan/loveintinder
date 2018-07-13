import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'

import './Episode.styl'

// TODO: Turn to mini player when scrolled

class Episode extends Component {
  constructor(props) {
    super(props)

    this.setEpisode = this.setEpisode.bind(this)
  }

  setEpisode() {
    const { episode, playEpisode, pauseEpisode } = this.props
    if (episode.isPlaying) {
      pauseEpisode(episode.guid)
    } else {
      playEpisode(episode.guid, episode.enclosure.url)
    }
  }

  render() {
    const { episode } = this.props
    return (
      <div className={`Episode ${episode.isPlaying ? 'is-playing' : ''}`}>
        {episode.isPlaying ? (
          <Icon type="pause-outline" onClick={this.setEpisode} />
        ) : (
          <Icon type="play-outline" onClick={this.setEpisode} />
        )}
        <div className="Episode__Information">
          <h3 className="Episode__Information__Title">
            {episode.title}{' '}
            <small className="Episode__Information__Duration">
              - {episode.itunes.duration}
            </small>
          </h3>
          <p className="Episode__Information__Description">
            {episode.contentSnippet}
          </p>
        </div>
        <Icon type="EQ" />
      </div>
    )
  }
}

Episode.propTypes = {
  episode: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  playEpisode: PropTypes.func.isRequired,
  pauseEpisode: PropTypes.func.isRequired,
}

export default Episode
