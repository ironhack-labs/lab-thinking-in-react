import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      stockFilter: false
    };
  }

  searchProductHandler = theText => {
    this.setState({
      searchText: theText
    });
  };

  filterStock = e => {
    console.log(this.state.stockFilter);
    this.setState({
      stockFilter: e
    });
  };

  render() {
    console.log(this.props.products);
    return (
      <div>
        <h1>IronStore</h1>

        <SearchBar
          searchTheText={this.searchProductHandler}
          stock={this.filterStock}
        />

        <ProductTable
          products={this.props.products}
          searchedText={this.state.searchText}
          filterCheck={this.state.stockFilter}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
