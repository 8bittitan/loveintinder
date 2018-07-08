import React from 'react'

import Play from '../../images/play.svg'

import './PlayButton.styl'

const PlayButton = () => (
  <div className="PlayButton">
    <button type="button" className="PlayButton__Button">
      {/* TODO: Use SVG over image */}
      <img src={Play} />
    </button>
    <span className="PlayButton__Text">Play latest episode</span>
  </div>
)

export default PlayButton
