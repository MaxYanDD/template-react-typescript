import { combineReducers } from 'redux'

import chatRoomReducer from '@/application/Chat/reducer'

export const rootReducer = combineReducers({
  chatRoom: chatRoomReducer,
})
