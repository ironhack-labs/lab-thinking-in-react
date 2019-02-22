import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'
//import data from '../src/data.json'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>IronStores</h1>
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
