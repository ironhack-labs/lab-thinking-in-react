import React, { Component } from 'react';
import './App.css';
import Data from "./data.json";
import ProductTable from './component/ProductTable.js'
import SearchBar from './component/SearchBar.js'
import ProductCategoryRow from './component/ProductCategoryRow.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar/>
      <ProductTable/>
      <ProductCategoryRow/>



      </div>
    );
  }
}

export default App;
