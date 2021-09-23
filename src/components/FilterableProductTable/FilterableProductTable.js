import React, { Component } from 'react'
import SearchBar from './../SearchBar/SearchBar'
import ProductTable from './../ProductTable/ProductTable'

export default class FilterableProductTable extends Component {

  state = {
    products: this.props.products
  }

  filterProductsBySearch = (value) => {

    this.setState({
      ...this.state,
      products: this.props.products.filter(product => {
        if (value.inStock) {
          return product.stocked && product.name.toLowerCase().includes(value.searchValue.toLowerCase())
        } else {
          return product.name.toLowerCase().includes(value.searchValue.toLowerCase())
        }
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar filterProductsBySearch={this.filterProductsBySearch} />
        <ProductTable products={this.state.products} />
      </div>
    )
  }
}
