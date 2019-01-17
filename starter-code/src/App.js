import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.data
    }
  };
  render() {
    return (
      <div className="App">
        <SearchBar productsData={this.state.products} />
        <ProductTable productsData={this.state.products}/>
      </div>
    );
  }
}

export default App;
