import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './tsunami_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tsunami</h1>
          <Button>Start Game</Button>
        </header>
        <p className="App-intro">
An unpredictable drawing game that's waves of fun!
        </p>
      </div>
    );
  }
}

export default App;
