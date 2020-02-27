import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';

export default class App extends Component {

  state = {
    allProducts: data
  }

  render() {
    return (
      <FilterableProductTable allProducts={data}> </FilterableProductTable>
    );
  }
}
