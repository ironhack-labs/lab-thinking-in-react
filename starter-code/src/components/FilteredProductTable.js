import React, { Component } from 'react';

import ProductTable from './ProductTable.js';
import SearchBar from './SearchBar.js';
import Checkbox from './Checkbox.js';

export default class FilteredProductTable extends Component {
  state = {
    products: this.props.products.data,
    query: '',
    checked: false
  };

  setQuery = query => {
    this.setState({
      query: query
    });
  };

  handleCheckboxChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
    // console.log(event.target.checked);
  };

  render() {
    return (
      <div>
        <SearchBar setQuery={this.setQuery} query={this.state.query} />
        <Checkbox
          checked={this.state.checked}
          handleCheckboxChange={this.handleCheckboxChange}
        />
        <ProductTable
          products={this.state.products}
          filter={this.state.query}
          checked={this.state.checked}
        />
      </div>
    );
  }
}
