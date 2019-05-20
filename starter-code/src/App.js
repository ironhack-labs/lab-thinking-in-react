import React, { Component } from 'react';
import './App.css';
import FilterableDataTable from "./components/FilterableProductTable"

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableDataTable />
      </div>
    );
  }
}

export default App;
