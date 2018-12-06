import React, { Component } from 'react'
import SearchBar from "../SearchBar/SearchBar.js"
import ProductTable from "../ProductTable/ProductTable.js"


export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    )
  }
}
