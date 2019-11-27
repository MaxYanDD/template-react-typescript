// import { createStore } from 'redux'
import { rootReducer } from './reducers'
import { createStore, applyMiddleware, Middleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger: Middleware = (store) => (next) => (action) => {
  console.group(action.type)
  console.info('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const crashReporter: Middleware = (store) => (next) => (action) => {
  try {
    return next(action)
  } catch (err) {
    console.error('caught an exception!', err)
    return null
  }
}

export type AppState = ReturnType<typeof rootReducer>

const middlewares: Middleware[] = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
  middlewares.push(crashReporter)
}

const middleWareEnhancer = applyMiddleware(...middlewares)
const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer))

export default store
