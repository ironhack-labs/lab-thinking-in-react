import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
/* Data */
import productsList from './data.json'

export default class App extends Component {


  render() {
    return (
    
      <div className="App">
        < FilterableProductTable data={productsList}/>
      </div>
    );
  }
}
