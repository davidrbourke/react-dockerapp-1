import React from 'react'
import { connect } from 'react-redux'
import * as roomActions from './../../redux/actions/roomActions'
import PropTypes from 'prop-types'

class AddRoom extends React.Component {

  state = {
    room: {
      name: '',
      size: ''
    }
  }

  handleChange = (event) => {
    const room = { ...this.state.room, [event.target.name]: event.target.value }
    this.setState({ room })
  }

  handleSubmit = (event) => {
    this.props.dispatch(roomActions.createRoom(this.state.room))
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Rooms</h2>
        <h3>Add Room</h3>
        <div>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.room.name} />
          <input type="text" name="size" onChange={this.handleChange} value={this.state.room.size} />
        </div>
        <input type="submit" value="Submit" />
        { this.props.rooms.map(room => (
          <div key={room.name}>{room.name}, {room.size}</div>
        ))}
      </form>
    )
  }
}

AddRoom.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms
  }
}

export default connect(mapStateToProps)(AddRoom)
