import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar'

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <ProductTable/>
      </div>
    )
  }
}
