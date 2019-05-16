import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
  state = {
    filterBar: "",
    stockFilter: false
  }

  onFilterBarChange = e => this.setState( { filterBar: e.target.value })
  onStockFilterChange = () => this.setState( { stockFilter: !this.state.stockFilter } ) 
  
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar onFilterBarChange={this.onFilterBarChange} onStockFilterChange={this.onStockFilterChange} />
        <ProductTable products={this.props.products.filter(p => this.filterProducts(p))} />
      </div>
    )
  }

  filterProducts(product) {
    if (this.state.stockFilter && !product.stocked) return false
    else {
      return (!this.state.filterBar || product.name.toLowerCase().includes(this.state.filterBar.toLowerCase()))
        ? true : false
    }
  }
}
