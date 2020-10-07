import React, { Component } from 'react';
import Search from './components/SearchBar';
import Product from './components/ProductTable';

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <Search />
        <div>
          <Product />
        </div>
      </div>
    );
  }
}
