import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
export default class FilterableProductTable extends Component {
  state = {
    query: '',
    onStock: false,
  };

  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };
  setStock = (boolean) => {
    this.setState({
      onStock: boolean,
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          query={this.state.query}
          setQuery={this.setQuery}
          onStock={this.state.onStock}
          setStock={this.setStock}
        />
        <ProductTable
          products={this.props.products}
          query={this.state.query}
          onStock={this.state.onStock}
        />
      </div>
    );
  }
}
