import React, { Component } from 'react'
import './App.css';
import jsondata from './data.json'
import FilterableProductTable from './components/FilterableProductTable'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={jsondata.data} />
      </div>
    )
  }
}

