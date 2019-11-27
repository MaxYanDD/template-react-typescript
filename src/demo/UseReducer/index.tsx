import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state: number, action: string) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return 0
    default:
      return state
  }
}

function index() {
  const [counter, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <span>{counter}</span>
      <button onClick={() => dispatch('increment')}>加一</button>
      <button onClick={() => dispatch('decrement')}>减一</button>
      <button onClick={() => dispatch('reset')}>重置</button>
    </div>
  )
}

export default index
