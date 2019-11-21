import React, { SFC, MouseEvent, MouseEventHandler } from 'react'

interface IProps {
  onClick: MouseEventHandler<HTMLDivElement>
}

// Partial 是的interface里面的所有变成可选
const Button: SFC<Partial<IProps>> = ({ onClick, children }) => {
  return <div onClick={onClick}>{children}</div>
}

export default Button
