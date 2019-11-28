import React, { Component } from 'react';
import './App.css';
import products from './data.json';
import FilteredProductTable from './components/FilteredProductTable';

export default class App extends Component {
 

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
       <FilteredProductTable products={products}/>
      </div>
    );
  }
}
