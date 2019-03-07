import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'
import FilteredProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredProductTable products={data} />
      </div>
    );
  }
}

export default App;
