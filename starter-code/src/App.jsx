import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';
import data from "./data.json"



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [...data.data],
      searchProducts: "",
      initialProducts: [...data.data],
    };
  }


  searchProduct(e){
    let searchProducts = e.target.value;
    let initialProducts = [...this.state.initialProducts]
     let filteredProducts = initialProducts.filter((product) => {
      let productName = product.name.toLowerCase()
      return productName.indexOf(searchProducts.toLowerCase()) !== -1
    })
    this.setState({
      ...this.state,
      products: filteredProducts,
      searchProducts: searchProducts
    })
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={this.state.products} search={e => this.searchProduct(e)}></FilterableProductTable>
      </div>
    );
  }
}
