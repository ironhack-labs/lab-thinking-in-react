import React, { Component } from "react";
import "./filterableProductTable.css";
import SearchBar from "../SearchBar/searchBar";
import ProductTable from "../ProductTable/productTable";

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div className="filterableProductTable">
        <SearchBar
          searchsportProp={this.props.searchsportProp}
          checkboxHandleProp={this.props.checkboxHandleProp}
        />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
