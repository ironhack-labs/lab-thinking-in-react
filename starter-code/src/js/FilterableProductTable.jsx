import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import Data from "../data/data.json";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      data: Data
    };
  }

  componentDidMount() {
    const categories = [...new Set(Data.map(item => item.category))];
    this.setState({ categories });
    this.setState({ data: Data });
    // console.log(this.state.data);
  }

  render() {
    const productTable = (
      <ProductTable
        categories={this.state.categories}
        productData={this.state.data}
      />
    );
    return (
      <div>
        <SearchBar />
        {productTable}
      </div>
    );
  }
}

export default FilterableProductTable;
