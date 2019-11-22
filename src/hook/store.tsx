import { useReducer } from 'react'

const initialState = 0

const reduer = (state: number, action: string) => {
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

export default function counterStore() {
  const [state, dispatch] = useReducer(reduer, initialState)
  return {
    state,
    dispatch,
  }
}
