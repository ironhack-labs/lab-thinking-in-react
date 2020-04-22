import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductRow from './components/ProductRow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <FilterableProductTable products={ data } />
      </div>

      <div className="search-bar">
        <SearchBar
  
        />
      </div>

       <div className="product-table">
        <ProductTable/>
       </div>

       <div className="product-row">
        <ProductRow
          product=''
        />
       </div>
      </div>
    );
  }
}

export default App;
