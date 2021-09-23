
import './App.css';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import jsondata from './data.json'

import React, { Component } from 'react'

export default class App extends Component {


  constructor(){
    super()
    this.state = {
      product: jsondata,
    }
  }

 
  render() {
    return (
      <div className="App">
      <FilterableProductTable products={ jsondata.data } />
    </div>
    )
  }
}







