import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    let color = this.props.product.stocked ? "black" : "red";

    return (
      <tr>
        <td style={{ color: color }}>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;