import React, { Component } from 'react';
import './App.css';
import AddRoom from './components/Room/AddRoom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddRoom></AddRoom>
      </div>
    );
  }
}

export default App;
