import React, { Component } from 'react'
import './App.css'
import Crypto from './components/Crypto'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Elanjai - crypto-live-rates</h2>
		  <h5>A cryptocurrency live rate analyzer</h5>
        </div>
        <Crypto />
      </div>
    )
  }
}

export default App
