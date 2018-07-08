import React from 'react'

import Play from '../../images/play.svg'

import './PlayButton.styl'

const PlayButton = ({ selectEpisode }) => {
  const onClick = () => {
    selectEpisode()
  }

  return (
    <div className="PlayButton">
      <button type="button" className="PlayButton__Button" onClick={onClick}>
        {/* TODO: Use SVG over image */}
        <img src={Play} />
      </button>
      <span className="PlayButton__Text">Play latest episode</span>
    </div>
  )
}

export default PlayButton
