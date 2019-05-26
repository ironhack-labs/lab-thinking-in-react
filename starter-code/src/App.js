import React, { Component } from 'react';
import data from './data/data.json'
import './App.css';
import SearchBar from './components/SearchBar.js';
import ProductTable from './components/ProductTable.js';


class App extends Component {
  state = {
    filteredProducts : [...data.data]
  }

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <div className='container'>
          <SearchBar/>
          <ProductTable products = {data.data}/>
        </div>
      </div>
    );
  }
}

export default App;
