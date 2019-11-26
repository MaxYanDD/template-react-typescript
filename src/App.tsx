import React, { Component } from 'react'
import store from '@/store'
import { Provider } from 'react-redux'
import About from '@/application/About'

export default function App() {
  return (
    <Provider store={store}>
      <About />
    </Provider>
  )
}
