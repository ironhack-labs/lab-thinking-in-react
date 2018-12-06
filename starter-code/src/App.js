import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from"./components/FilterableProductTable/FilterableProductTable.js"
import articles from "./data.json"

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable></FilterableProductTable>
      </div>
    );
  }
}

export default App;
