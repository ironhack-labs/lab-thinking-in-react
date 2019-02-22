import React, { Component } from "react";
import "./ProductRow.css";

class ProductRow extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td className={this.props.stocked ? "stocked" : "outofstock"}>
          {this.props.name}
        </td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
