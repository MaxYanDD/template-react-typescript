import React, { ChangeEventHandler, SFC, KeyboardEvent } from 'react'

interface ChatInterfaceProps {
  userName: string
  message: string
  sendMessage: (message: string) => void
  updateMessage: ChangeEventHandler<HTMLInputElement>
}

const ChatInterface: SFC<ChatInterfaceProps> = ({
  userName,
  message,
  updateMessage,
  sendMessage,
}) => {
  function send() {
    sendMessage(message)
  }

  function keyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      send()
    }
  }

  return (
    <div className="chat-interface">
      <h3>User: {userName} </h3>
      <input
        value={message}
        onChange={updateMessage}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={send}>Send</button>
    </div>
  )
}

export default React.memo(ChatInterface)
