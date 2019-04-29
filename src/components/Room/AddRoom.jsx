import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as roomActions from '../../redux/actions/roomActions'
import PropType from 'prop-types'

function AddRoom ({ history, actions }) {
  const [room, setRoom] = useState({
    name: '',
    size: ''
  })

  const handleChange = (event) => {
    const roomClone = { ...room, [event.target.name]: event.target.value }
    setRoom(roomClone)
  }

  const handleSubmit = (event) => {
    actions.addRoom(room)
      .then(_ => {
        resetRoom()
        history.push('/')
      })
    event.preventDefault()
  }

  const resetRoom = () => {
    setRoom({
      name: '',
      size: ''
    })
  }

  return (
    <div className='row'>
      <form onSubmit={handleSubmit}>
        <h3>Add a new room</h3>
        <div className='row'>
          <div className='input-field'>
            <input id='name' type='text' name='name' onChange={handleChange} value={room.name} />
            <label htmlFor='name'>Room name</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input id='size' type='text' name='size' onChange={handleChange} value={room.size} />
            <label htmlFor='size'>Room capacity</label>
          </div>
        </div>
        <input type='submit' value='Add' className='btn' />
      </form>
    </div>
  )
}

AddRoom.propTypes = {
  history: PropType.object.isRequired,
  actions: PropType.object.isRequired
}

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(roomActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRoom)
