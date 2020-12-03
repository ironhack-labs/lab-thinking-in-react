import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable.js';
import data from './data.json'





export default class App extends Component {
  render() {
    return (
      <div>
    <h1>IronStore</h1>
    <FilterableProductTable products = { data } />
    </div>
    )
  }
}
