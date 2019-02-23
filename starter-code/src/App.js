import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'
import ProductTable from './components/ProductTable'
import SearchBar from './components/SearchBar';
import FilterProductTable from './components/FilterProductTable'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
       <FilterProductTable products={data}/>
      </div>
    );
  }
}

export default App;
