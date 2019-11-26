import { createAction } from 'redux-actions'
import * as type from './constants'

export const change_color = createAction<type.IHomeState>(type.CHANGE_COLOR)
export const change_red = createAction<type.IHomeState>(
  type.CHANGE_RED,
  () => ({
    color: 'red',
  })
)
