import React from 'react'
import PropTypes from 'prop-types'

import Episode from '../Episode/Episode'

import './EpisodeList.styl'

const EpisodeList = ({
  episodes,
  setPlayingEpisode,
  currentlyPlaying,
  pauseCurrentEpisode,
}) => (
  <div className="EpisodeList">
    {episodes.map(episode => {
      const data = {
        ...episode,
        isPlaying: episode.guid === currentlyPlaying,
      }

      return (
        <Episode
          playEpisode={setPlayingEpisode}
          pauseEpisode={pauseCurrentEpisode}
          episode={data}
          key={episode.guid}
        />
      )
    })}
  </div>
)

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  setPlayingEpisode: PropTypes.func.isRequired,
}

export default EpisodeList
