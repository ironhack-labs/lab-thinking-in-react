import React, { Component } from 'react';
import './App.css';
import prod from './data.json';
import FilterableProductTable from './components/FilterableProductTable.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable products={prod.data} />
      </div>
    );
  }
}
