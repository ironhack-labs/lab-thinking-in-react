import React, { Component } from 'react';
import products from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import './styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable products={ products.data } />
      </div>
    );
  }
}
