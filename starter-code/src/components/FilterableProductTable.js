import React, { Component, Fragment } from 'react'
import data from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


class FilterableProductTable extends Component{
  constructor(){
    super()
    this.state = {
    }
  }
  
  render(){
    return (
      <>
          <SearchBar />
          <ProductTable />
      </>
    )
  }
}
export default FilterableProductTable;