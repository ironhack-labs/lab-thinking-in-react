import React, { Component } from 'react';
import './App.css';
import FilterableProductsTable from './components/FilterableProductTable'

class App extends Component {
  render() {
    return (
      // <div className="App">
        <FilterableProductsTable />
      // </div>
    );
  }
}

export default App;