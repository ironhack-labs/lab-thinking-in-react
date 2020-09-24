import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    query: '',
    checkbox: false,
  };

  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore 🛒</h1>
        <SearchBar query={this.state.query} setQuery={this.setQuery} />
        <br></br>
        <ProductTable query={this.state.query} products={this.props.products} />
      </div>
    );
  }
}
