import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

export default class App extends Component {
  render() {
    const products = data.data;
    return (
      <div className='App'>
        <FilterableProductTable products={products} />
      </div>
    );
  }
}
