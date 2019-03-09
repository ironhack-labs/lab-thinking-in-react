import React, { Component } from "react";
import json from "./data.json";
import FilterableProductTable from "./components/FilterableProductTable.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={json.data} />
      </div>
    );
  }
}

export default App;
