import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import data from '../data.json';

export default class FilterableProductTable extends Component {
  state = {
    allProducts: data,
  };

  render() {
    return (
      <div>
        <center>
          <h1>IronStore</h1>
        </center>
        <SearchBar></SearchBar>
        <ProductTable productList = {this.state.allProducts} />
      </div>
    );
  }
}
