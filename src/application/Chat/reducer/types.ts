// state类型
export interface Message {
  user: string
  message: string
  timestamp: number
}

export interface ChatState {
  messages: Message[]
}

export interface SystemState {
  loggedIn: boolean
  session: string
  userName: string
}
// constants

export const SEND_MESSAGE = 'SEND_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'
export const UPDATE_SESSION = 'UPDATE_SESSION'

// actions
interface SendMessageAction {
  type: typeof SEND_MESSAGE
  payload: Message
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE
  meta: {
    timestamp: number
  }
}
interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: SystemState
}

export type SystemACtiontypes = UpdateSessionAction
export type ChatActionTypes = SendMessageAction | DeleteMessageAction
