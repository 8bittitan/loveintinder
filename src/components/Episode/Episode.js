import React from 'react'
import PropTypes from 'prop-types'

import ListPlay from '../../images/list-play.svg'
import MiniEqualizer from '../../images/equalizer-mini.svg'

import './Episode.styl'

const Episode = ({ episode }) => (
  <div className="Episode">
    <img
      src={ListPlay}
      alt={`Play ${episode.title}`}
      className="Episode__Play"
    />
    <div className="Episode__Information">
      <h3 className="Episode__Information__Title">{episode.title}</h3>
      <p className="Episode__Information__Description">{episode.contentSnippet}</p>
    </div>
    <img src={MiniEqualizer} className="Episode__EQ" />
  </div>
)

Episode.propTypes = {
  episode: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
}

export default Episode
