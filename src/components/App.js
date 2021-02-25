import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Component } from 'react'
import { Container } from 'react-bootstrap'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

import products from './../data.json'


class App extends Component {
  constructor() {
    super()
    this.state = {
      products: products.data
    }
  }

  searchProduct(product) {
    const filteredProducts = products.data.filter(elm => elm.name.toUpperCase().includes(product.product.toUpperCase()) && elm.stocked === product.hasStockCheck)
    this.setState({ products: filteredProducts })
  }

  render() {
    return (
      <Container>
        <h1 className="text-center">IronStore</h1>
        <SearchBar searchProduct={product => this.searchProduct(product)}></SearchBar>
        <ProductTable products={this.state.products}></ProductTable>
      </Container>
    )
  }
}

export default App