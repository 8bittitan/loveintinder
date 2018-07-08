import React from 'react'
import PropTypes from 'prop-types'

import Episode from '../Episode/Episode'

import './EpisodeList.styl'

const EpisodeList = ({ episodes }) => (
  <div className="EpisodeList">
    {episodes.map(episode => <Episode episode={episode} key={episode.guid} />)}
  </div>
)

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
}

export default EpisodeList
