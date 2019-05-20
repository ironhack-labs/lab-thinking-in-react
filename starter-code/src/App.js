import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import FilterableDataTable from "./components/FilterableProductTable"

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableDataTable products={data}/>
      </div>
    );
  }
}

export default App;
