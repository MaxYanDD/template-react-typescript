import React from 'react'
import store from '@/store/index.ts'
import { Provider } from 'react-redux'
import ChatRoom from './application/Chat/indexWithHook'
import UseReducer from './demo/UseReducer'
import RouteDeom from './application/Router'
function App() {
  return (
    <Provider store={store}>
      <>
        <ChatRoom />
        <UseReducer />
        <RouteDeom />
      </>
    </Provider>
  )
}

export default App
