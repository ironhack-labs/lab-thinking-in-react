import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import { SearchBar } from "./components/SearchBar";
import { ProductTable } from "./components/ProductTable";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      productData: data.data
    };
  }

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container" id="FilterableProductTable">
            <SearchBar />
            <ProductTable prodData={this.state.productData} />
          </div>
        </section>
      </div>
    );
  }
}
