import React, { Component } from 'react'
import Content from './Content'
import Header from './Header'
import { createStore, Provider } from './react-redux'
export interface IState {
  themeColor: string
}

interface IAction {
  type: string
  themeColor: string
}

const themeReducer = (state: IState, action: IAction) => {
  console.log(action)
  if (!state)
    return {
      themeColor: 'red',
    }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }

    default:
      return state
  }
}
createStore<IState>(themeReducer, { themeColor: 'yellow' })

export default class Index extends Component {
  render() {
    return (
      <>
        <Provider>
          <>
            <Header />
            <Content />
          </>
        </Provider>
      </>
    )
  }
}
