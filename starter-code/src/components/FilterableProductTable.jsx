import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.search = '';
    this.handleSearch = this.handleSearch.bind(this);
    this.state.stockChecked = false;
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleCheck(event) {
    this.setState({ stockChecked: !this.state.stockChecked });
    // console.log(this.state.stockChecked);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>IronStore</h1>
        <SearchBar
          products={this.props.products}
          handleSearch={this.handleSearch}
          handleCheck={this.handleCheck}
        />
        <ProductTable
          products={this.props.products}
          search={this.state.search}
          stockChecked={this.state.stockChecked}
        />
      </div>
    );
  }
}
