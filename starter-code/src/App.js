import React, { Component } from "react";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable.js";
import data from "./data.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <FilterableProductTable products={data} />
      </div>
    );
  }
}

export default App;
