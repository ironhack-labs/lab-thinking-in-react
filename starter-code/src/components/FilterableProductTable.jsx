import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  /* searchProducts(event) {
    this.props.searchProducts(event);
  } */

  render() {
    // console.log('FPT: ', this.props);
    return (
      <div>
        <h1>IronStore</h1>
        <div>
          <SearchBar
            products={this.props.products}
            searchProducts={this.props.searchProducts}
            searchText={this.props.searchText}
          />
        </div>
        <div>
          <ProductTable products={this.props.products} />
        </div>
      </div>
    );
  }
}
