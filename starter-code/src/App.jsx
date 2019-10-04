import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import FilterableProductTable from './FilterableProductTable';

export default class App extends Component {
  render() {
    
    return (
      <div className="App">
        <FilterableProductTable products={ data }></FilterableProductTable>
      </div>
    );
  }
}
