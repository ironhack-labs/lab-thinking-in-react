import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar'
import ProductTable from './ProductTable/ProducTable'
import products from '../../data.json'

export default class FilterableProductTable extends Component {

  constructor(){
    super();
    this.state={
      products:products.data
    }
  }
  render() {
    return (
      <div>
        <SearchBar/>
        <ProductTable products={this.state.products}/>
      </div>
    )
  }
}
