import React from 'react'
import Img from 'gatsby-image'

import './Avatar.styl'

const Avatar = ({ sizes }) => (
  <div className="Avatar">
    <Img sizes={sizes} />
  </div>
)

export default Avatar
