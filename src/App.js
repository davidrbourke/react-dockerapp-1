import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import React, { Component } from 'react'
import './App.css'
import Rooms from './components/Room/Rooms'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Rooms />
      </div>
    )
  }
}

export default App
