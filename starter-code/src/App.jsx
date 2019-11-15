import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { data } from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    products: data
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1 className="title">IronStore</h1>
        </div>
        <FilterableProductTable products={data} />
      </div>
    );
  }
}
