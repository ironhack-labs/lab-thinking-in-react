import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    search: '',
    checked: false
  };

  setQuery = search => {
    // console.log(2);
    this.setState({
      search: search
    });
  };

  setChecked = check => {
    this.setState({
      checked: check
    });
  };

  render() {
    // console.log(3);
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          search={this.state.search}
          handleQuery={this.setQuery}
          handleQueryCheck={this.setChecked}
          checkState={this.state.checked}
        />
        <ProductTable
          products={this.props.products}
          search={this.state.search}
          checkState={this.state.checked}
        />
      </div>
    );
  }
}
