import { handleResponse, handleError } from './apiUtil'
const baseUrl = 'http://localhost:3001/rooms/'

export function getRooms () {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError)
}
