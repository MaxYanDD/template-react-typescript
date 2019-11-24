export default function createStore<T>(reducer: Function, initState: T) {
  let state: T = initState
  const listeners: Function[] = []
  const subscribe = (listener: Function) => {
    console.log(listener)
    listeners.push(listener)
    console.log(listeners)
  }
  const getState = () => state
  const dispatch = (action: object) => {
    state = reducer(state, action)
    console.log(listeners)
    listeners.forEach((listener) => listener())
  }
  return { getState, subscribe, dispatch }
}

export interface IStore {
  getState: Function
  subscribe: Function
  dispatch: Function
}
