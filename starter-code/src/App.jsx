import React, { Component } from 'react';
import './App.css';
import data from "./data.json"
import FilterableProductTable from './components/FilterableProductTable';


export default class App extends Component {
  constructor(){
    super()
    






  }
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data}></FilterableProductTable>
      </div>
    );
  }
}
