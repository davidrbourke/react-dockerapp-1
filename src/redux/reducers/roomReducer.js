import * as types from './../actions/actionTypes'
import initialState from './../intialState'

export default function roomReducer (state = initialState.rooms, action) {
  switch (action.type) {
    case types.CREATE_ROOM:
      return [ ...state, { ...action.room } ]
    case types.LOAD_ROOMS_SUCCESS:
      return action.rooms
    default:
      return state
  }
}
