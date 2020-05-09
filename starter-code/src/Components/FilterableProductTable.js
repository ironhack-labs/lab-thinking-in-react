import React, { Component, Fragment } from 'react';
import data from '../data.json';
import Searchbar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

export default class FilterableProductTable extends Component {
  state = {
    search: '',
    checked: false,
  };
  handleSearch = (search) => {
    this.setState({
      search: search,
    });
  };

  handleCheck = (checked) => {
    this.setState({
      checked: checked,
    });
  };

  render() {
    return (
      <Fragment>
        <h1>IronStore</h1>
        <Searchbar
          handleSearch={this.handleSearch}
          search={this.search}
          checked={this.checked}
          handleCheck={this.handleCheck}
        />
        <ProductTable
          product={data}
          search={this.state.search}
          checked={this.state.checked}
        />
      </Fragment>
    );
  }
}
