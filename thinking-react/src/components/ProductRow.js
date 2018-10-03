import React, { Component } from "react";
import data from "../data.json";

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let color;
    if (!this.props.stock) {color={color: "red"}}
    return (
      <tr>
        <td style={color}>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
