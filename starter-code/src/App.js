import React, { Component } from "react";
import SearchBar from "./components/stateful/Searchbar";
import ProductTable from "./components/stateful/ProductTable";
import data from "./data.json"
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      allProducts: data.data,
      filteredProducts: data.data
    }

    this.filter = (searchString) => {

      let filteredProducts = [...this.state.allProducts]
      filteredProducts = filteredProducts.filter(elm => elm.name.includes(searchString))

      this.setState({filteredProducts})
    }
    
  }


  render() {
    return (
      <div>
        <h1>Iron Store</h1>
        {console.log(this.state.allProducts)}
        <SearchBar filter={this.filter}/>
        <ProductTable products={this.state.filteredProducts}/>
      </div>
    );
  }
}

export default App;
