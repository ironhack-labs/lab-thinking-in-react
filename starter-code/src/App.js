import React, { Component } from 'react';
import './App.css';
import {FiltProductTable} from './components/FiltProductTable.js'
import data from './data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
      <FiltProductTable products={data}/>
      </div>
    );
  }
}

export default App;
