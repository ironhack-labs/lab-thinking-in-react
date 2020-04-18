import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {

  constructor() {
    super()
    this.state = {
      filterSearch: '',
      inStock: false
    }
  }

  handleSearch = (text) => {
    this.setState({
      filterSearch: text
    })
  }

  handleInStock = (bool) => {
    this.setState({
      inStock: bool
    })
  }

  getMatchProducts = () => {
    const { props: { products: { data: prods } }, state: { filterSearch, inStock } } = this
    let prodsToShow = prods.filter(p => {
      if (!p.name.includes(filterSearch)) return false
      if (inStock && !p.stocked) return false
      return true
    })
    return prodsToShow
  }

  render() {
    return (
      <div>
        <div className="columns is-vcentered">
          <div className="column">
            <SearchBar handleInStock={this.handleInStock} handleSearch={this.handleSearch} />
            <ProductTable products={this.getMatchProducts()} />
          </div>
        </div>
      </div>
    )
  }
}
