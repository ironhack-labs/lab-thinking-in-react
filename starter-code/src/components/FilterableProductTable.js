import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          query={this.props.query}
          triggerSetQuery={this.props.triggerSetQuery}
          filterStock={this.props.filterStock}
          setFilterStock={this.props.setFilterStock}
        />
        <ProductTable
          products={this.props.products}
          query={this.props.query}
          filterStock={this.props.filterStock}
        />
      </div>
    );
  }
}
