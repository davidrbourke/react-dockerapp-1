export default function roomReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_ROOM":
      return [ ...state, { ...action.room } ]
    default:
      return state
  }
}