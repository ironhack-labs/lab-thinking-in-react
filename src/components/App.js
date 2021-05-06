import React from 'react';
import { Component } from 'react'
import products from './../data.json'
import './App.css';
import FilterableProductTable from './FilterableProductTable'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      productList: products
    }
  }

  render() {
    return(
      <section>
        <h1>Hello</h1>
        <FilterableProductTable products={ this.state.productList.data }/>
      </section> 
    )
  }
}

export default App;
