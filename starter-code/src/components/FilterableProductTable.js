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
        <SearchBar checkStock={this.props.checkStock} search={this.props.search} />
        <ProductTable showStock={this.props.showStock} searchInput={this.props.searchInput} products={this.props.products} />
      </div>
    )
  }
}

export default FilterableTable;