import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import ProductTable from './ProductTable.js';


class FilterableProductTable extends Component {

  render() {
    return (
      <div>
          <SearchBar/>
          <ProductTable/>
      </div>
    );
  }
}

export default FilterableProductTable;