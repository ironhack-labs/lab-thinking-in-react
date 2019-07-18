import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    let color = this.props.stocked ? "black" : "red";
    return (
      <tr>
        <td style={{ color: color }}>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
