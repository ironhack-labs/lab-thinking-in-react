import React, { Component } from "react";

import FilterableProductTable from "./components/FilterableProductTable";

import "./App.css";

class App extends Component {
  render() {
    const mainTitle = "IronStore";
    return (
      <div className="App">
        <h1>{mainTitle}</h1>
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
