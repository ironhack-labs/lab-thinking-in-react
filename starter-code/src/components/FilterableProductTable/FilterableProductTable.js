import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'
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
