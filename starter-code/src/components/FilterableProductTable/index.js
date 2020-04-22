import React, { Component } from "react";
import ProductTable from "../ProductTable";
import SearchBar from "../SearchBar";
import "./styles.css";

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products
  };

  render() {
      const {products} = this.state;
    return (
      <div>
          <h1> IronStore </h1>
          <SearchBar />
          <ProductTable products={products}/>
      </div>
    );
  }
}
