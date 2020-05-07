import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    search: '',
    outOfStock: false,
  };

  setQuery = (search) => {
    this.setState({
      search,
    });
  };

  handleChange = (e) => {
    this.setQuery(e.target.value);
  };

  render() {
    return (
      <>
        <SearchBar
          search={this.state.search}
          setQuery={this.setQuery}
          handleChange={this.handleChange}
        />
        <ProductTable
          products={this.state.products}
          search={this.state.search}
        />
      </>
    );
  }
}
