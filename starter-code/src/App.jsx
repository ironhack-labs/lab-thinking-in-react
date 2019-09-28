import React, { Component } from 'react';
import data from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
          <FilterableProductTable productsOnApp={ data }/>
      </div>
    );
  }
}
