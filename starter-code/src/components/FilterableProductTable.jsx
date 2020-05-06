import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

 class FilterableProductTable extends Component {

  state = {
    products: this.props.products,
    search:'',
    stock: false,
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  handleStock = (e) => {
    this.setState({ stock: e.target.checked });
  }

  render(){

  return (

    <div>
      <SearchBar callbackStock={this.handleStock} callbackSearch={this.handleSearch}/>
      <ProductTable search={this.state.search} products={this.state.products} stock={this.state.stock}/>
    </div>

    )
  }
}

export default FilterableProductTable