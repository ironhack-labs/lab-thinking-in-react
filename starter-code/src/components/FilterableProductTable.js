import React, { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar, { copy } from "./SearchBar";

class FilterableProductTable extends Component {
  render() {
    console.log(copy);
    return (
      <React.Fragment>
        <SearchBar />
        <ProductTable products={copy} />
      </React.Fragment>
    );
  }
}

export default FilterableProductTable;
