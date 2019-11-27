import React, { Component } from 'react';
import products from './data.json'; // on l'a renommé en products pour pouvoir y accéder avec .data
import FilterableProductTable from './FilterableProductTable';
import './App.css';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Lab du jour</h1>
        <FilterableProductTable products={products.data} />
      </div>
    );
  }
}
