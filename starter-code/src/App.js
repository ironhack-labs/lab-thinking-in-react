import React, { Component } from 'react'
import './App.css'
import FilterableProductTable from "./components/FilterableProductsTable"
import data from "./data.json"


class App extends Component {
  render() {
    return (
        <FilterableProductTable products={data}/>
    )
  }
}
 
export default App
