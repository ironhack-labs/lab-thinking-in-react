import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json'
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        {<FilterableProductTable products= { data.data } />}
      </div>
    );
  }
}
