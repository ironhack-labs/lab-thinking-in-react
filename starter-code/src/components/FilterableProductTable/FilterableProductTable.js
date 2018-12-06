import React, { Component } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import ProductTable from './components/ProductTable/ProductTable'


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
