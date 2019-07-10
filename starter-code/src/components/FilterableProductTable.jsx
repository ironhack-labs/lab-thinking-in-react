import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import productsList from "../data.json";

export default class FilterableProductTable extends Component {
  state = {
    products: productsList.data,
    inputValue: "",
    checkbox: false
  };
  handleInput = event => {
    this.setState({ inputValue: event.target.value });
  };
  handleCheck = event => {
    this.setState({ checkbox: event.target.checked });
    //this.setState({checkbox: !this.state.checkbox})
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar userInput={this.handleInput} userCheck={this.handleCheck} />
        <table className="table-wrapper">
          <ProductTable
            products={this.state.products}
            inputValue={this.state.inputValue}
            checkbox={this.state.checkbox}
          />
        </table>
      </React.Fragment>
    );
  }
}
