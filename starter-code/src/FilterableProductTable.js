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
      filteredProducts: [],
      isStocked: false
      
    }
  }

  getSearchValue = (value) => {
    const products = [...this.state.products];
    const valueLower = value.toLowerCase();

    const filteredProducts = this.state.isStocked ? 
    this.getFilteredProducts(valueLower, this.getStockedProducts()) : 
    this.getFilteredProducts(valueLower, products);

    this.setState({
      searchValue: valueLower,
      filteredProducts: filteredProducts,
    })
  }

  getCheckValue = (value) => {
    const products = [...this.state.products];
    const stockedProducts = this.getStockedProducts()
    this.setState({
      isStocked: value,
      filteredProducts: value ? stockedProducts : products
    })
  }

  getFilteredProducts = (valueLower, products) => {
    return products.filter(product => {
      const productName = (product.name).toLowerCase();
      return productName.includes(valueLower)
    });
  }

  getStockedProducts = () => {
    const products = [...this.state.products];
    return products.filter(product => product.stocked);
  }

  render() {
   
    let productsList = this.state.products;
    if (this.state.searchValue || this.state.isStocked) productsList = this.state.filteredProducts;
    if((this.state.searchValue.length == 0) && this.state.isStocked) productsList = this.getStockedProducts();
    
    return (
      <div className="container">
        <h1 className="title has-text-centered">IronStore</h1>
        <SearchBar searchValue={this.getSearchValue} checkValue={this.getCheckValue}/>
        <ProductTable productsList={productsList} />
      </div>
    );
  }
}

export default FilterableProductTable;
