import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import React, { Component } from 'react'

export default class FilterableProductTable extends Component {

  state = {
    products: this.props.products.data
  }

  searchAndStock(data) {
    let inStock = data.check ? 
    this.props.products.data.filter(product => product.stocked) :
    this.props.products.data

    let filtered = (data.filter.length < 1) ? 
    inStock : 
    inStock.filter(product => product.name.toLowerCase().includes(data.filter.toLowerCase()))

    this.setState({
      ...this.state,
      products: filtered
    })
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar sendData={(data) => this.searchAndStock(data)}/>
        <ProductTable products={ this.state.products }/>
      </React.Fragment>
    )
  }
}
