import React, { Component } from "react";
import "./FilterableProductTable.css";

import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

class FilterableProductTable extends Component {
  state = {
    searchString: "",
    checked: false
  };

  updateSearch(event) {
    event.preventDefault();
    this.setState({ searchString: event.target.value });
  }

  updateCheck() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <div className="FilterableProductTable">
        <h1>Iron Store</h1>
        <SearchBar
          searchString={this.state.searchString}
          handleSearch={event => this.updateSearch(event)}
          handleCheckbox={() => this.updateCheck()}
        />
        <ProductTable
          products={this.props.products}
          searchString={this.state.searchString}
          checked={this.state.checked}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
