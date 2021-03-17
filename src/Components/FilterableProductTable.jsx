import React, { Component } from 'react';
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
  state = {
    products: this.props.products
  }

  searchProduct = (valueFromSearchBar) => {
    console.log("value's value... ", valueFromSearchBar.name);
    const searchValue = valueFromSearchBar.name;
    console.log(searchValue);
    const searchResult = this.state.products.filter(product => {
      console.log(product);
      if (typeof searchValue === "boolean") return product.stocked;
      else return product.name.includes(searchValue);
    });
    console.log("search result? ", searchResult);
    this.setState({products: searchResult});
  }

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar searchProduct={this.searchProduct}/>
        <ProductTable products={this.state.products}/>
      </div>
    )
  }
}

export default FilterableProductTable;
