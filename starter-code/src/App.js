import React, { Component } from "react";
import FilterableProductTable from "./components/FilterableProductTable";

class App extends Component {
  render() {
    return (
      <div id="App">
        <h1>IronStore</h1>
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
