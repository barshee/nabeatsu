import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Nabeatsu from '../components/Nabeatsu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NabeatsuApp</h1>
        <p className="App-intro">
          press <code>INCREMENT</code> or <code>DECREMENT</code> button.
        </p>
        <Nabeatsu />
      </div>
    );
  }
}

export default connect()(App)