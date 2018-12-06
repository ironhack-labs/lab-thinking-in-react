import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import ProductCategoryRow from "./components/ProductCategoryRow";
import ProductRow from "./components/ProductRow";

class App extends Component {
  constructor() {
    super();

    this.myData = data;

    this.state = {
      category: this.myData.category,
      price: this.myData.price,
      stocked: this.myData.stocked,
      name: this.myData.name
    };
  }
  render() {
    return (
      <div className="App">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <input type="checkbox" name="stock" id="stock" />
          <label>Only show products in stock</label>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>
                  Sporting Goods
                  {/* <ProductCategoryRow /> */}
                </td>
              </tr>
              </thead>
              <ProductRow category="Sporting Goods" data={this.myData}/>
              <thead>
              <tr>
                <td>
                  Electronics
                  {/* <ProductCategoryRow /> */}
                </td>
              </tr>
            </thead>
              <ProductRow category="Electronics" data={this.myData}/>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
