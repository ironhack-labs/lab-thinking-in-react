import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  state = {
    filterText: "",
    inStockOnly: false,
  };

  //Metodos de searchBar

  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText,
    });
  };

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly: inStockOnly,
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">Iron Store</h1>

        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />

        <ProductTable
          products={this.props.data}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
