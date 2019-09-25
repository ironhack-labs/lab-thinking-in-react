import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      displayed: this.props.products
    };
  }



  render() {
    return (
      <div>
        <ProductTable products={this.state.displayed} />
      </div>
    );
  }
}

export default FilterableProductTable;