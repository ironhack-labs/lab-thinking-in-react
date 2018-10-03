import React, { Component } from "react";
import data from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div style={{border: 'orange'}}>
    <SearchBar/>
    <ProductTable/>
    </div>
    );
  }
}

export default FilterableProductTable;
