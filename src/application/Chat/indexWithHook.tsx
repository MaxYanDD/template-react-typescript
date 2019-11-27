import React, { SyntheticEvent, SFC, useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '@/store'
import ChatHistory from './components/ChatHistory'
import ChatInterface from './components/ChatInterface'
import { sendMessage, asyncSendMessage, updateSession } from './reducer/actions'
import './index.css'

export type UpdateMessageParam = SyntheticEvent<{ value: string }>

const indexWithHook: SFC = () => {
  const dispatch = useDispatch()
  const chatRoomState = useSelector((store: AppState) => store.chatRoom)
  const [message, setMessage] = useState('')

  const { chat, system } = chatRoomState

  useEffect(() => {
    dispatch(
      updateSession({
        loggedIn: true,
        session: 'my_session',
        userName: 'myName',
      })
    )
    dispatch(
      sendMessage({
        user: 'Chat Bot',
        message:
          'This is a very basic chat application written in typescript using react and redux. Feel free to explore the source code.',
        timestamp: new Date().getTime(),
      })
    )
    dispatch(asyncSendMessage('This message was sent by a thunk!'))
  }, [])

  const updateMessage = (event: UpdateMessageParam) => {
    setMessage(event.currentTarget.value)
  }

  const sendhandler = (message: string) => {
    dispatch(
      sendMessage({
        user: system.userName,
        message: message,
        timestamp: new Date().getTime(),
      })
    )
  }

  return (
    <div>
      <ChatHistory messages={chat.messages} />
      <ChatInterface
        userName={system.userName}
        message={message}
        updateMessage={updateMessage}
        sendMessage={sendhandler}
      />
    </div>
  )
}

export default memo(indexWithHook)
