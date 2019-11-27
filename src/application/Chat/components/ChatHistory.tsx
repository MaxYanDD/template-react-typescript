import React, { SFC } from 'react'
import { Message } from '../reducer/types'

interface ChatHistoryProps {
  messages: Message[]
}

const ChatHistory: SFC<ChatHistoryProps> = ({ messages }) => {
  return (
    <div className="chat-history">
      {messages.map((message) => (
        <div className="message-item" key={message.timestamp}>
          <h3>From: {message.user}</h3>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  )
}

export default React.memo(ChatHistory)
