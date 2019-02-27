import React, { Component } from 'react'
import './App.css'
import ProductTable from './components/ProductTable.jsx'
import dataObj from './data.json'


class App extends Component {

  render() {
    return (
      <div>
        <h1>IronStore</h1>        
        <ProductTable allProducts={[...dataObj.data]} />
      </div>
    )
  }
}

export default App
