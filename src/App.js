import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import React, { Component } from 'react'
import './App.css'
import Rooms from './components/Room/Rooms'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddRoom from './components/Room/AddRoom'
import Header from './components/Header/Header'

class App extends Component {
  render () {
    return (
      <Router>
        <Header />
        <div className='container'>
          <Route exact path='/' component={Rooms} />
          <Route path='/addroom' component={AddRoom} />
        </div>
      </Router>
    )
  }
}

export default App
