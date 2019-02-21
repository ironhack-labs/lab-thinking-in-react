import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <h1>Ironstore</h1>
        <SearchBar />
        <ProductTable datos={this.props.datos} />
      </div>
    );
  }
}
