import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import ProductTable from '../ProductTable/ProductTable.jsx'

class FilterableProductTable extends Component {
  state = {

  }
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar />
      </div>
    )
  }
}


export default FilterableProductTable