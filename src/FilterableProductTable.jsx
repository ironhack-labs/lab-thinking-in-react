import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


export default class FilterableProductTable extends Component {
  render() {
    return (
      <div id="main">
        <SearchBar products={this.props.products} handleSearch={this.props.handleSearch} handleCheckbox={this.props.handleCheckbox}/>
        <ProductTable products={this.props.products}/>
      </div>
    )
  }
}
