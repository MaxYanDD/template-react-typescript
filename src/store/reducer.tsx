import { combineReducers } from 'redux'
import { reducer as aboutReducer } from '@/application/About/store/reducer'
import { reducer as homeReducer } from '@/application/Home/store/reducer'

export default combineReducers({
  about: aboutReducer,
  home: homeReducer,
})
