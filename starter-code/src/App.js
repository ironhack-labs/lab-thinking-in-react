import React, { Component } from 'react';
import './App.css';

// import datasArray from "./data.json";

import FilterableProductTable from "./components/FilterableProductTable.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Homepage</h1>
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
