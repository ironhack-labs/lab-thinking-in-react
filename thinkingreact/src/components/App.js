import React, { Component } from 'react'
import './App.css'
import data from './../data.json'
import ProductTable from './product-table/ProductTable'
import SearchBar from './search-bar/SearchBar'


class App extends Component {

  constructor() {
    super()
    this.state = {
      data: data
    }
  }

    
 
    
  
  render() {
   
    return (
      <>
        <h2>Iron Store</h2>
        <SearchBar data={this.state.data.data}/>
        <ProductTable data={this.state.data.data} />  
        
                    
      </>
    )
  }
}

export default App