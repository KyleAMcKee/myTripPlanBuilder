import React, { Component } from 'react';
import './App.css';
import Trips from './components/trips/trips';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Available trips
        </header>
        <Trips />
      </div>
    );
  }
}

export default App;
