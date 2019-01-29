import React, { Component } from 'react';
import './App.css';
import Trips from './components/trips/trips';
import NewTrip from './components/newTrip/newTrip';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Available trips
        </header>
        <Trips />
        {/* <NewTrip /> */}
      </div>
    );
  }
}

export default App;
