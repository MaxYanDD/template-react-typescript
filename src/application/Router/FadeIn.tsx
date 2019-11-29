import React, { SFC } from 'react'
import './animate.css'

const FadeIn: SFC = (props) => {
  return <div className="fadeIn animated">{props.children}</div>
}

export default FadeIn
