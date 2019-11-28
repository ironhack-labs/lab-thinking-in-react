import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    query: '',
    onStock: false
  };

  setQuery = query => {
    this.setState({
      query: query
    });
  };

  setStock = bool => {
    this.setState({
      onStock: bool
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          query={this.state.query}
          setQuery={this.setQuery}
          setStock={this.setStock}
        />
        <ProductTable
          products={this.state.products}
          query={this.state.query}
          onStock={this.state.onStock}
        />
      </div>
    );
  }
}
