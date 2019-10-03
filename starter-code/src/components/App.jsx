import React, { Component } from 'react'
import products from '../includes/data.json';
import FilterableProductTable from './pages/FilterableProductTable/FilterableProductTable'

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      products: products.data
    }
  }

  render() {
    return (
      <div>
        <FilterableProductTable products={this.state.products}/> 
      </div>
    )
  }
}
