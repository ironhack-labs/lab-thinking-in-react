import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import SearchBar from './components/SearchBar.js';
import FilterableProductTable from './components/FilterableProductTable.js';

export default class App extends Component {
  //state = {
   // data: data.data,
  //};

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data} />
      </div>
    );
  }
}
