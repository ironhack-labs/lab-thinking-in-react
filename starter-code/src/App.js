import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import FilterableProductTable from '../src/components/FilterableProductTable'

class App extends Component {
  render() {
    return (
      <FilterableProductTable totalProducts={data} />
    )
  }
}

export default App;
