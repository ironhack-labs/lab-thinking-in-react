import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  searchChange(event) {
    const searchResult = event.target.value;
    // this is equal to saying:
    // const {value}=event.target;
    console.log(searchResult);
    this.setState({ search: searchResult });
  }

  render() {
    const productData = this.props.products.data;
    return (
      <div className="FilterableProductTable">
        <h3>Iron Store</h3>

        <SearchBar searchChange={event => this.searchChange(event)} />

        <br />

        <ProductTable productData={productData} search={this.state.search} />
      </div>
    );
  }
}

export default FilterableProductTable;
