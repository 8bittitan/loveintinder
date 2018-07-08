import React from 'react'

import './PlayButton.styl'

const PlayButton = () => (
  <div className="PlayButton">
    <button type="button" className="PlayButton__Button">
      P
    </button>
    <span className="PlayButton__Text">Play latest episode</span>
  </div>
)

export default PlayButton
