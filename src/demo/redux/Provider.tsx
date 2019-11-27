import React, { SFC } from 'react'
import createStore from './redux'
// createStore, connect, mapStateToProps, mapDispatchTopros
interface IState {
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

export const store = createStore<IState>(themeReducer, { themeColor: 'blue' })
const state: IState = store.getState()

export const ctx = React.createContext<IState>({} as IState)

export const Provider: SFC = ({ children }) => {
  return <ctx.Provider value={state}>{children}</ctx.Provider>
}
