import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
