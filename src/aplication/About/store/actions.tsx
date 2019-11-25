import * as type from './constants'
import { createAction } from 'redux-actions'

export const add = createAction<type.IAboutState>(type.ADD)

export const add_1 = createAction<type.IAboutState>(type.ADD_1, () => ({
  num: 1,
}))

export const minus = createAction<type.IAboutState>(type.MINUS)
