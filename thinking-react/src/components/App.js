import './App.css'
import Data from "./../data.json"

import React, { Component } from "react"

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'



class App extends Component {
  constructor() {
    super()
    this.state = {
      data: Data.data

        
    }
  }

  filterData(letter) {

    Data.name.filter(elm => elm.toUpperCase().startsWith('F'))

  }
  

  render() {

    // console.log(this.state.data)
    return (
      <>
        <h1>IronStore</h1>
        <nav>
          <SearchBar />
        </nav>
        <section>
          <ProductTable items={this.state.data} />
        </section>
      </>
  )

  }
}
    

export default App
