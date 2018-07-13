import React from 'react'

import Avatar from '../Avatar/Avatar'

import './Host.styl'

const Host = ({ name, sizes, isRight }) => (
  <div className={`Host ${isRight ? 'is-right' : ''}`}>
    <Avatar sizes={sizes} />

    <div className="Host__Information">
      <h3 className="Host__Information__Name">{name}</h3>
      <p className="Host__Information__Description">
        Lorem ipsum dolor amet small batch ugh aesthetic, cronut squid beard
        snackwave listicle air plant. Sustainable pickled jianbing, quinoa
        drinking vinegar copper mug stumptown.
      </p>
    </div>
  </div>
)

export default Host
