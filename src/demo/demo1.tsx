import React, { useState, useEffect, SFC, ChangeEventHandler } from 'react'
import { number } from 'prop-types'

interface Props {
  value?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Counter: SFC<Props> = ({ value, onChange }) => {
  const [count, setCount] = useState<number | string>(0)

  useEffect(() => {
    console.log('render')
  }, [])

  return (
    <>
      <div>{count}</div>
      <div>{value}</div>
      <input type="text" onChange={onChange} />
      <button onClick={() => setCount(Number(count) + 1)}>加1</button>
    </>
  )
}

export default Counter
