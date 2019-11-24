import React, { SFC, ComponentType, Component, createContext } from 'react'
import createS, { IStore } from './redux'
// Provider, createStore, connect, mapStateToProps, mapDispatchTopros
interface Iconnect {
  mapStateToProps?: Function
  mapDispatchToprops?: Function
}

let store: IStore
let ctx: any
export function createStore<T>(reducer: Function, initState: T) {
  store = createS<T>(reducer, initState)
  ctx = createContext<T>({} as T)
}

export const connect = ({ mapStateToProps, mapDispatchToprops }: Iconnect) => (
  InjectComp: ComponentType
) => {
  return class extends Component {
    static displayName = `connect${InjectComp.displayName}`

    UNSAFE_componentWillMount() {
      store.subscribe(() => this.forceUpdate())
    }

    render() {
      return (
        <ctx.Consumer>
          {() => {
            const stateProps =
              mapStateToProps && mapStateToProps(store.getState())
            const dispatchProps =
              mapDispatchToprops && mapDispatchToprops(store.dispatch)

            return <InjectComp {...stateProps} {...dispatchProps} />
          }}
        </ctx.Consumer>
      )
    }
  }
}

export const Provider: SFC = ({ children }) => (
  <ctx.Provider value={store.getState()}>{children}</ctx.Provider>
)
