import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'

import './PlayButton.styl'

const PlayButton = ({ selectEpisode, isPlaying, pausePlaying }) => {
  const onClick = () => {
    if (isPlaying) {
      pausePlaying()
    } else {
      selectEpisode()
    }
  }

  return (
    <div className="PlayButton">
      <button type="button" className="PlayButton__Button" onClick={onClick}>
        {isPlaying ? <Icon type="pause" /> : <Icon type="play" />}
      </button>
      <span className="PlayButton__Text">Play latest episode</span>
    </div>
  )
}

PlayButton.propTypes = {
  selectEpisode: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  pausePlaying: PropTypes.func.isRequired,
}

export default PlayButton
