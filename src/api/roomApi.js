import { handleResponse, handleError } from './apiUtil'
const baseUrl = 'http://localhost:3001/rooms/'

export function getRooms () {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError)
}

export function addRoom (room) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(room)
  })
}
