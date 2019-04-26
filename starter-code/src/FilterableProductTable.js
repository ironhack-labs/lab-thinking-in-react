import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import products from './data.json';

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      products: products.data,
      searchValue: '',
      filteredProducts: []
    }

  }
  
  getSearchValue = (value) => {
    const valueLower = value.toLowerCase();
    const products = [...this.state.products];
    const filteredProducts = products.filter(product => {
      const productName = (product.name).toLowerCase();
      return productName.includes(valueLower)
    });

    this.setState({
      searchValue: valueLower,
      filteredProducts: filteredProducts
    })
  }

  render() {
    let productsList = this.state.products;
    if (this.state.searchValue) productsList = this.state.filteredProducts;
    return (
      <div className="container">
        <h1 className="title">IronStore</h1>
        <SearchBar searchValue={this.getSearchValue} />
        <ProductTable productsList={productsList} />
      </div>
    );
  }
}

export default FilterableProductTable;
