import React, { Component } from 'react';
import data from "../data.json"
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'


export default class FilterableProductTable extends Component {

  constructor() {
    super()
    this.state = {
      products: [...data.data],
      productFilter: []
    }
}

filter = filter => {
  let productFilter = this.state.products
  productFilter = this.state.products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
  this.setState({productFilter})

}

  render() {
    return (
      <>
      <SearchBar onBarChange={this.filter} onCheckboxChange={this.filter} />
      <ProductTable products={this.state.productFilter}/>
      </>
    );
  }
}