import React, { Component } from "react";
import "./../App.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import ProductRow from "./ProductRow";
import data from "./../data.json";

export default class FilterableProductTable extends Component {
  state = {
    dataList: data.data,
    text: ""

    // items: []
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1 className="MainTitle">IronStore</h1>
        <SearchBar handleChange={this.handleChange} text={this.state.text} />
        <ProductTable
          products={this.state.dataList}
          userinput={this.state.text}
        />
      </div>
    );
  }
}
