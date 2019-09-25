import React, { Component } from 'react';

import data from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: data
    };
  }

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar searchProduct={this.state.product} />
        <ProductTable product={this.state.product} />
      </div>
    );
  }
}
