import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import productsData from './data.json';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'

// {"category": "Sporting Goods",  "price": "$49.99",    "stocked": true,    "name": "Football"}

// console.log(products);

export default class App extends Component {




  render() {
      console.log(productsData.data)
    return (
      <div className="App">
        <FilterableProductTable productsData = {productsData.data}/>
      </div>
    );
  }
}
