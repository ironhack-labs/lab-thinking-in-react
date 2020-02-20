import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable.jsx';
import json from './data.json';

// console.log(json.data);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable products={json.data}/>
      </div>
    );
  }
}
