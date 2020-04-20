import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <div>
        <FilterableProductTable></FilterableProductTable>
      </div>
      </div>
    );
  }
}

export default App;
