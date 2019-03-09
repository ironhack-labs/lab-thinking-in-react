import React, { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
  state = {
    searchString: ""
  };

  updateSearch(event) {
    this.setState({ searchString: event });
  }

  render() {
    return (
      <div>
        <h1 className="FilterableProductTable">IronStore</h1>
        <SearchBar
          updateString={value => this.updateSearch(value)}
          searchString={this.state.searchString}
        />
        <ProductTable
          products={this.props.products}
          searchString={this.state.searchString}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
