import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import Product from "./components/FilterProductTable";
import SearchBar from "./components/SearchBar"

class App extends Component {
  state = {
    productos: data
  };

  render() {
    return (
      <div className="App">
        <SearchBar info={this.state.productos}></SearchBar>
        {Object.keys(this.state.productos).map((productos, i) => (
          <Product key={i} info={this.state.productos[i]} />
        ))}

      </div>
    );
  }
}
export default App;
