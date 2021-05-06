import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  state = {
    query: '',
  };

  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  render() {
    return (
      <div>
        FilterableProductTables
        <SearchBar setQuery={this.setQuery} query={this.state.query} />
        <ProductTable products={this.props.products} query={this.state.query} />
      </div>
    );
  }
}
