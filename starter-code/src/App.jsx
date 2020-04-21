import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'
import products from './data.json'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable data={products.data} />
      </div>
    );
  }
}
