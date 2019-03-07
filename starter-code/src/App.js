import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import FilteredProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredProductTable />
      </div>
    );
  }
}

export default App;
