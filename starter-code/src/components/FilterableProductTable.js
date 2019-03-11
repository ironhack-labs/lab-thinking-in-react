import React, { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
  state = {
    searchString: "",
    stock: false
  };

  updateSearch = oneText => {
    this.setState({ searchString: oneText });
  };

  updateCheck = event => {
    this.setState({ stock: event });
    // console.log(event);
  };

  render() {
    return (
      <div>
        <h1 className="FilterableProductTable">IronStore</h1>
        <SearchBar
          updateString={this.updateSearch}
          updateCheckBox={this.updateCheck}
          // searchString={this.state.searchString}
        />
        <ProductTable
          products={this.props.products}
          search={this.state.searchString}
          stock={this.state.checked}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
