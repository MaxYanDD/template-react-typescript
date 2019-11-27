import {
  Message,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  SystemState,
  UPDATE_SESSION,
} from './types'
import { exampleAPI } from '@/Api/chatRoom'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '@/store'
import { Action } from 'redux'

export const sendMessage = (newMessage: Message) => ({
  type: SEND_MESSAGE,
  payload: newMessage,
})

export const deleteMessage = (timestamp: number) => ({
  type: DELETE_MESSAGE,
  meta: { timestamp },
})

export const asyncSendMessage = (
  message: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispath) => {
  const asyncResp = await exampleAPI()
  dispath(
    sendMessage({ message, user: asyncResp, timestamp: new Date().getTime() })
  )
}

export const updateSession = (newSession: SystemState) => ({
  type: UPDATE_SESSION,
  payload: newSession,
})
