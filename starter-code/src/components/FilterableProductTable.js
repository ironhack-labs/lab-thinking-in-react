import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <section className="FilterableProductTable">
      <p>FilterableProductTable</p>
      
      <SearchBar />

      <ProductTable />
 
      </section>
     );
  }
}
 
export default FilterableProductTable;