import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


export default class FilterableProductTable extends Component {
  state = {

  }


  handleSearch = (e) => {
    console.log(e + "sup from handle search")
  }


  render() {
    return (
      <div id="main">
        <SearchBar products={this.props.products} handleSearch={this.handleSearch}/>
        <ProductTable products={this.props.products}/>
      </div>
    )
  }
}
