import React, { Component } from "react";
import "./App.css";
import products from "./data.json";
import FilterableProductTable from "./components/FilterableProductTable";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="columns">
            <div className="column">
              <FilterableProductTable {...products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
