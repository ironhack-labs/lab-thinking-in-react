import React, { Component } from 'react';
import './App.css';
// import { booleanLiteral } from '@babel/types';
import data from './data.json'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      dataCopy: data.data
    }
  }
  search = e => {
    // let product = [...this.state.dataCopy]
    console.log("baaaaaaaaaaa")
    console.log(e)
    // let filterProduct = this.state.dataCopy.filter(elm => elm.name.toUpperCase().includes(e.target.value.toUpperCase()))
    // this.setState({ dataCopy: filterProduct })
  }
  render() {
    return (
      <>
        {/* {console.log(this.state.dataCopy)} */}
        <h1>IronStore</h1>
        <SearchBar search={this.search} />
        <ProductList data={this.state.dataCopy} />

      </>

    )
  }
}
