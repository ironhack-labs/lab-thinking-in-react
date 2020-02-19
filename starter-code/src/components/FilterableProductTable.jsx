import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {

  // state = {
  //   products : this.props.products
  // }

  render() {
    return (
      <div class="product-table">
        <h1>Ironhack Store</h1>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
