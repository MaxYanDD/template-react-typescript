import React, { useReducer } from 'react'

import counterStore from './store'
const Counter = () => {
  const { state, dispatch } = counterStore()
  return (
    <div>
      <p>useReducer</p>
      <button onClick={() => dispatch('decrement')}>-</button>
      <span>{state}</span>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  )
}

export default Counter
