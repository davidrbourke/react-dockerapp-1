import { combineReducers } from 'redux'
import rooms from './roomReducer'

const rootReducer = combineReducers({
  rooms
})

export default rootReducer
