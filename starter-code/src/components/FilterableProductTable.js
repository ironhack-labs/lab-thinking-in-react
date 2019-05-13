import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar, { copy } from './SearchBar'

class FilterableProductTable extends Component {

  render() {
    console.log(copy)
    return (
      <div className="App">
        <SearchBar />
        <ProductTable products={ copy } />
      </div>
    );
  }
}

export default FilterableProductTable;

