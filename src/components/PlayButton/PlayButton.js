import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'

import './PlayButton.styl'

const PlayButton = ({ selectEpisode, isPlaying }) => {
  const onClick = () => {
    selectEpisode()
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
}

export default PlayButton
