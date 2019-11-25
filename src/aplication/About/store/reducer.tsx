import { handleActions } from 'redux-actions'
import * as type from './constants'

const initialSate = {
  num: 0,
}

const reducer = handleActions(
  {
    [type.ADD]: (state, action) => ({ num: state.num + action.payload.num }),
    [type.ADD_1]: (state, action) => ({ num: state.num + action.payload.num }),
    [type.MINUS]: (state, action) => ({ num: state.num - action.payload.num }),
  },
  initialSate
)

export default reducer
