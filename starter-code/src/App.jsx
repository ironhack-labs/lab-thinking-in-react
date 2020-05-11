import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './compononents/FilterableProductTable';
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data} />
      </div>
    );
  }
}
