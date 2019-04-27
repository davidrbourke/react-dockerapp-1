import React from 'react'
import PropTypes from 'prop-types'

const RoomList = ({ rooms }) => (
  <table>
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Capacity</th>
      </tr>
    </thead>
    <tbody>
      { rooms.map(room => {
        return (
          <tr key={room.id}>
            <td>{room.id}</td>
            <td>{room.name}</td>
            <td>{room.size}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

RoomList.propTypes = {
  rooms: PropTypes.array.isRequired
}

export default RoomList
