import React, { Component } from 'react';

import './App.css';

import data from './data';

import FilterableProductTable from './components/FilterableProductTable';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IRONSTORE</h1>
        <FilterableProductTable products={data} />
      </div>
    );
  }
}
