import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableTable extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar search={this.props.search} />
        <ProductTable searchInput={this.props.searchInput} products={this.props.products} />
      </div>
    )
  }
}

export default FilterableTable;