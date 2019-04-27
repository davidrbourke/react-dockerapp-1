import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as roomActions from '../../redux/actions/roomActions'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import RoomList from './RoomList'
import AddRoom from './AddRoom'

class Rooms extends Component {
  componentDidMount () {
    this.props.actions.loadRooms()
      .catch(error => {
        alert('Loading rooms failed' + error)
      })
  }

  render () {
    return (
      <div className='container'>
        <h2>Rooms</h2>
        <RoomList rooms={this.props.rooms} />
        <AddRoom />
      </div>
    )
  }
}

Rooms.propTypes = {
  rooms: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    rooms: state.rooms
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(roomActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms)
