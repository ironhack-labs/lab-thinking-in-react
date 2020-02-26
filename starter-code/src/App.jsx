import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import ProductTable from './Components/ProductTable';
import FilterableProductTable from './Components/FilterableProductTable.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <FilterableProductTable/>
      </div>
    );
  }
}
