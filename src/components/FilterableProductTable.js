import React, { Component } from 'react';
import ProductTable from './ProductTable.js';
import SearchBar from './SearchBar.js';

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
      <SearchBar products={this.props.products} />
        <ProductTable products={this.props.products} /> 
      </div>
    );
  }
}
