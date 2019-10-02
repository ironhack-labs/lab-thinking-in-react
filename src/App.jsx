import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from "./components/FilterableProductTable"
import products from "./data.json"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Iron Store</h1>
        </header>
        <FilterableProductTable products={products.data} />
      </div>
    );
  }
}
