import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search/Search"
import ProductTable from "./components/ProductTable/ProductTable"

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
        <Search />
        <ProductTable />
        </table>
      </div>
    );
  }
}

export default App;
