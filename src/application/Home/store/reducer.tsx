import { handleActions } from 'redux-actions'
import * as type from './constants'

const initState: type.IHomeState = {
  color: 'blue',
}

export const reducer = handleActions(
  {
    [type.CHANGE_COLOR]: (state, action) => {
      return { color: action.payload.color }
    },
    [type.CHANGE_RED]: (state, action) => {
      return { color: action.payload.color }
    },
  },
  initState
)
