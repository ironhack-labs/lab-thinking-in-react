import React, { Component } from "react";
import "./App.css";
import { data } from "./data.json";
import FilterableProductTable from "./components/FilterableProductTable";

class App extends Component {
  state = {
    search: "",
    products: data
  };

  handleSearch = e => {
    let search = e.target.value;
    const products = data.filter(product =>
      this.filterProduct(search, product.name)
    );
    this.setState({ products });
  };

  filterProduct = (string, name) => {
    // return product if there's no search string
    if (string.length === 0) return true;
    else return name.toLowerCase().includes(string.toLowerCase());
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <FilterableProductTable
          products={products}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}
export default App;