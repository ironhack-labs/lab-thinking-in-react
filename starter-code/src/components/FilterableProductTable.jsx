import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  state = {
    search: '',
    inStockCheck: false,
  };
  handleSearchInput = (e) => {
    this.setState({ search: e.target.value });
  };
  handleCheckbox = (e) => {
    this.setState({ inStockCheck: e.target.checked });
  };
  render() {
    return (
      <div>
        <SearchBar
          searchClbk={this.handleSearchInput}
          checkClbk={this.handleCheckbox}
        />
        <ProductTable
          products={this.props.products}
          search={this.state.search}
          checked={this.state.inStockCheck}
        />
      </div>
    );
  }
}
