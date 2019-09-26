import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import SearchBar from './components/searchBar';
import ProductTable from './components/productTable';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

export default App;
