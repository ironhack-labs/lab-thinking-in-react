import React, { Component, createContext } from 'react'
import dataJson from '../data.json'
export const Mycontext = createContext()

const { data } = dataJson

export default class MyProvider extends Component {
  state = {
    products: data,
    searchField: ''
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredProducts = this.state.products.filter(product => {
      return product.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    })
    return (
      <Mycontext.Provider
        value={{
          products: filteredProducts,
          searchChange: this.onSearchChange
        }}
      >
        {this.props.children}
      </Mycontext.Provider>
    )
  }
}
