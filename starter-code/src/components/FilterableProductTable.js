import React, { Component } from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <h1> {this.props.products}</h1>
      </div>
    )
  }
}

export default FilterableProductTable