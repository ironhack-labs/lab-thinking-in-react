import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedProduct: "",
      results: []
    };
  }

  updateSearch(event) {
    const { value } = event.target;
    this.setState({ searchedProduct: value });
    console.log(this.state.searchedProduct);
  }

  searchProducts() {
    const { searchedProduct, results } = this.state;
    const { products } = this.props;

    var allResults = products.data.filter(oneProduct => {
      return oneProduct.name.indexOf(searchedProduct) > -1;
    });

    return allResults;
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
        <ProductTable allProducts={this.searchProducts()} />
      </div>
    );
  }
}

export default FilterableProductTable;
