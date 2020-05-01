import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <br/>
      <h1>IRON STORE</h1>
       <FilterableProductTable products={data}/>
      </div>
    );
  }
}
