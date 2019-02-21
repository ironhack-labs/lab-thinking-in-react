import React, { Component } from 'react'
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default class FilterableProductTable extends Component {

  state = {
    ...this.props.productsFromApp
  }

  handlerFunction = (query, checkbox) => {
    let newState = {
      ...this.state
    }

    if (checkbox) {
      newState.data = this.props.productsFromApp.data.filter(product => {
        return product.stocked === true

      })
    } else {
      newState.data = this.props.productsFromApp.data
    }

    newState.data = newState.data.filter(product => {
      return product.name.toLowerCase().startsWith(query.toLowerCase())

    })

    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar handlerFunction={this.handlerFunction} />
        <ProductTable productsFromFilterableProductTable={this.state} />
      </div>
    )
  }
}
