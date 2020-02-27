import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import ProductTable from './components/ProductTable'
import SearchBar from './components/SearchBar'
import data from './data.json'

export default class App extends Component {
  constructor(updateList) {
    super(updateList)

    this.state = {
      products: data.data
    }
  }
  updateList = receivedElem => {
    console.log(receivedElem)
    this.setState({
      products: receivedElem
    })
  }
  render() {
    console.log(`App ${typeof this.updateList}`)

    return (
      <main className="app">
        <h1>IronStore</h1>
        <SearchBar data={data} updateList={this.updateList} />
        <ProductTable data={this.state.products} />
      </main >
    )
  }
}
