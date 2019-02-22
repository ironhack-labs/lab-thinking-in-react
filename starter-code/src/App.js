import React, { Component } from "react";
import "./App.css";
import FilterableProducTable from "./components/FilterableProductTable";
import data from "./data.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* we are callng our data by the name product so to refer to it, use the products.data */}
        <FilterableProducTable products={data} />
      </div>
    );
  }
}

export default App;
