import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from "./components/FilterableProductTable.js";
import SearchBar from './components/SearchBar';
import productsArray from "./data.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FilterableProductTable data={productsArray} />
          
        </div>

    );
  }
}

export default App;
