import React, { Component } from 'react';
import './App.css';
import data from '../data.json'
import FilterProducts from './components/FilterProducts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterProducts {...data} />
      </div>
    );
  }
}

export default App;
