import React from 'react'
import PropTypes from 'prop-types'

import './Episode.styl'

const Episode = ({ episode, playEpisode }) => {
  const setEpisode = () => {
    playEpisode(episode.guid, episode.enclosure.url)
  }

  return (
    <div className={`Episode ${episode.isPlaying ? 'is-playing' : ''}`}>
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Episode__Play"
        onClick={setEpisode}
      >
        <path
          d="M9 0L16.7942 13.5H1.20577L9 0Z"
          transform="translate(22 4) rotate(90)"
          fill="#C5C6B7"
        />
        <circle cx="13.5" cy="13.5" r="13" stroke="#C5C6B7" />
      </svg>
      <div className="Episode__Information">
        <h3 className="Episode__Information__Title">{episode.title}</h3>
        <p className="Episode__Information__Description">
          {episode.contentSnippet}
        </p>
      </div>
      <svg
        width="25"
        height="14"
        viewBox="0 0 25 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Episode__EQ"
      >
        <rect width="5" height="13" transform="translate(0 1)" fill="#C4C4C4" />
        <rect width="5" height="7" transform="translate(5 7)" fill="#C4C4C4" />
        <rect width="5" height="7" transform="translate(20 7)" fill="#C4C4C4" />
        <rect
          width="5"
          height="10"
          transform="translate(10 4)"
          fill="#C4C4C4"
        />
        <rect width="5" height="14" transform="translate(15)" fill="#C4C4C4" />
      </svg>
    </div>
  )
}

Episode.propTypes = {
  episode: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  playEpisode: PropTypes.func.isRequired,
}

export default Episode
