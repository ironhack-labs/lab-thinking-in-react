import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    filteredProducts: this.props.products
  };

  searchItem(keyword, inStock) {
    let filteredProducts = [];

    if (keyword.length === 0) {
      filteredProducts = [...this.state.products];
    } else {
      filteredProducts = [...this.state.products].filter(product => {
        return product.name.toLowerCase().indexOf(keyword) >= 0;
      });
    }

    if(inStock){
      filteredProducts = [...filteredProducts].filter(product => {
        return product.stocked === true
      })
    }

    this.setState({
      ...this.state,
      filteredProducts
    });
  }

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          products={this.state.products}
          searchFunc={(keyword, inStock) => this.searchItem(keyword, inStock)}
        />
        <ProductTable products={this.state.filteredProducts} />
      </div>
    );
  }
}
