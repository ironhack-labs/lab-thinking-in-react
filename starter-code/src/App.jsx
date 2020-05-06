import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable products={data.data} />
      </div>
    );
  }
}
