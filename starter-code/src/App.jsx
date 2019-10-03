import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './component/FilterableProductTable';
import SearchBar from './component/SearchBar';
import data from "./data.json"


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data}>
        </FilterableProductTable>
       
      </div>
    );
  }
}
