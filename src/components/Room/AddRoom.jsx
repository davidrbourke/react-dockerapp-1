import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as roomActions from '../../redux/actions/roomActions'

class AddRoom extends Component {

  constructor (props) {
    super(props)
    this.state = {
      room: {
        name: '',
        size: ''
      }
    }
  }

  handleChange = (event) => {
    const room = { ...this.state.room, [event.target.name]: event.target.value }
    this.setState({ room })
  }

  handleSubmit = (event) => {
    this.props.actions.createRoom(this.state.room)
    this.resetRoom()
    event.preventDefault()
  }

  resetRoom = () => {
    this.setState({room: {
      name: '',
      size: ''
    }})
  }

  render () {
    return (
      <div className='row'>
        <form onSubmit={this.handleSubmit}>
          <h3>Add a new room</h3>
          <div className='row'>
            <div className='input-field'>
              <input id='name' type='text' name='name' onChange={this.handleChange} value={this.state.room.name} />
              <label htmlFor='name'>Room name</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <input id='size' type='text' name='size' onChange={this.handleChange} value={this.state.room.size} />
              <label htmlFor='size'>Room capacity</label>
            </div>
          </div>
          <input type='submit' value='Add' className='btn' />
        </form>
      </div>
    )
  }
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
