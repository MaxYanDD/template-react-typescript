import React from 'react'
import store from '@/store/index.ts'
import { Provider } from 'react-redux'
import ChatRoom from './application/Chat/indexWithHook'
import UseReducer from './demo/UseReducer'

function App() {
  return (
    <Provider store={store}>
      <>
        <ChatRoom />
        <UseReducer />
      </>
    </Provider>
  )
}

export default App
