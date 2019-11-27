import React, { Component, SyntheticEvent } from 'react'
import { connect } from 'react-redux'
import { AppState } from '@/store'
import ChatHistory from './components/ChatHistory'
import ChatInterface from './components/ChatInterface'
import { ChatState, SystemState } from './reducer/types'
import { sendMessage, asyncSendMessage, updateSession } from './reducer/actions'

import './index.css'

interface ChatRoomState {
  chat: ChatState
  system: SystemState
  sendMessage: typeof sendMessage
  updateSession: typeof updateSession
  asyncSendMessage: Function
}

export type UpdateMessageParam = SyntheticEvent<{ value: string }>

class ChatRoom extends Component<ChatRoomState> {
  state = {
    message: '',
  }

  componentDidMount() {
    this.props.updateSession({
      loggedIn: true,
      session: 'my_session',
      userName: 'myName',
    })
    this.props.sendMessage({
      user: 'Chat Bot',
      message:
        'This is a very basic chat application written in typescript using react and redux. Feel free to explore the source code.',
      timestamp: new Date().getTime(),
    })

    this.props.asyncSendMessage('This message was sent by a thunk!')
  }

  updateMessage = (event: UpdateMessageParam) => {
    this.setState({ message: event.currentTarget.value })
  }

  sendMessage = (message: string) => {
    this.props.sendMessage({
      user: this.props.system.userName,
      message: message,
      timestamp: new Date().getTime(),
    })
    this.setState({ message: '' })
  }
  render() {
    return (
      <div>
        <ChatHistory messages={this.props.chat.messages} />
        <ChatInterface
          userName={this.props.system.userName}
          message={this.state.message}
          updateMessage={this.updateMessage}
          sendMessage={this.sendMessage}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.chatRoom.system,
  chat: state.chatRoom.chat,
})

export default connect(mapStateToProps, {
  sendMessage,
  updateSession,
  asyncSendMessage,
})(ChatRoom)
