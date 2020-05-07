import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data} />
      </div>
    );
  }
}
