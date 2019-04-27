import * as types from './actionTypes'
import * as roomApi from './../../api/roomApi'

export function createRoom (room) {
  return { type: types.CREATE_ROOM, room }
}

export function loadRoomsSuccess (rooms) {
  return { type: types.LOAD_ROOMS_SUCCESS, rooms }
}

// thunk
export function loadRooms () {
  return function (dispatch) {
    return roomApi.getRooms()
      .then(rooms => {
        dispatch(loadRoomsSuccess(rooms))
      })
      .catch(error => {
        throw error
      })
  }
}
