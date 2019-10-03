import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './FilterableProductTable.js';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable />
      </div>
    );
  }
}
