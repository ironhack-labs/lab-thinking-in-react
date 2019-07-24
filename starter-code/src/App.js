import React, { Component } from 'react';
import './App.css';
import Main from './components/main/Main.js';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main products = {data} />
      </div>
    );
  }
}

export default App;