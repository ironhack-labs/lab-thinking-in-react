import React, { Component } from "react";
import data from "../data.json";

class ProductCategoryRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tr>
        <th style={{ fontWeight: "bold" }}>{this.props.name}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
