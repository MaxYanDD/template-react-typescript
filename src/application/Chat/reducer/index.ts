import {
  ChatState,
  ChatActionTypes,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  SystemState,
  SystemACtiontypes,
  UPDATE_SESSION,
} from './types'
import { combineReducers } from 'redux'

const initialChatState: ChatState = {
  messages: [],
}

const initialSystemState: SystemState = {
  userName: '',
  session: '',
  loggedIn: false,
}

export const chatReducer = (
  state = initialChatState,
  action: ChatActionTypes
): ChatState => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload],
      }
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          (message) => message.timestamp !== action.meta.timestamp
        ),
      }
    default:
      return state
  }
}

export const systemReducer = (
  state = initialSystemState,
  action: SystemACtiontypes
): SystemState => {
  switch (action.type) {
    case UPDATE_SESSION:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default combineReducers({
  chat: chatReducer,
  system: systemReducer,
})
