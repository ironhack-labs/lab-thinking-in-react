import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>PP EXERCISE</h2>
        <FilterableProductTable/>
        
      </div>
    );
  }
}

export default App;
