import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td
          style={
            this.props.myProduct.stocked === true
              ? { color: "black" }
              : { color: "red" }
          }
        >
          {this.props.myProduct.name}
        </td>
        <td>{this.props.myProduct.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
