import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class extends Component {
  render() {
    return (
      <div>
        <SearchBar
          products={this.props.products}
          handleSearch={this.props.handleSearch}
          handleCheckbox={this.props.handleCheckbox}
        />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
