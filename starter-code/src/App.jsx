import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { data } from './data.json';

export default class App extends Component {
  state = {
    products: data
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>IronStore</h1>
        </div>
        <FilterableProductTable products={data} />
      </div>
    );
  }
}
