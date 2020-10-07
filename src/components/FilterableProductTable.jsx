import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div>
          <ProductTable />
        </div>
      </div>
    );
  }
}
