import React, { SFC, MouseEvent, MouseEventHandler } from 'react'

interface IProps {
  onClick: MouseEventHandler<HTMLDivElement>
  show: boolean
}

// Partial 是的interface里面的所有变成可选
const Button: SFC<Partial<IProps>> = ({ onClick, children, show }) => {
  console.log('button render')
  return <>{show && <div onClick={onClick}>{children}</div>}</>
}

export default Button
