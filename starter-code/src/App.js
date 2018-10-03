import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import Product from "./components/FilterProductTable";

class App extends Component {
  state = {
    productos: data
  };
  render() {
    return (
      <div className="App">
        {Object.keys(this.state.productos).map((productos, i) => (
          <Product key={i} info={this.state.productos[i]} />
        ))}
        <table />
      </div>
    );
  }
}
export default App;
