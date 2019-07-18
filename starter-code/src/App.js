import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import FilterableProductTable from "./components/FilterableProductTable";

class App extends Component {
  render() {
    return (
      <div>
        <FilterableProductTable products={data.data} />
      </div>
    );
  }
}

export default App;
