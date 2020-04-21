import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable products={ products } />
      </div>
    );
  }
}

export default FilterableProductTable;