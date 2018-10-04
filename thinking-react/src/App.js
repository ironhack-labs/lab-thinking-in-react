import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";
import data from "./data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data
    };
  }

  render() {
    return (
      <div>
        <FilterableProductTable categories={this.state.data.data} />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
