import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedProduct: ""
    };
  }

  updateSearch(event) {
    const { value } = event.target;
    this.setState({ searchedProduct: value });
  }

  render() {
    // console.log(this.props.products);
    return (
      <div className="FilterableProductTable">
        FilterableProductTable
        <SearchBar
          search={this.state.searchedProduct}
          searchChange={event => this.updateSearch(event)}
        />
        <ProductTable allProducts={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
