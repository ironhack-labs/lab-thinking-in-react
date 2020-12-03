import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>this is the app</h1>

        <FilterableProductTable products={data}/>

      </div>
    )
  }
}


