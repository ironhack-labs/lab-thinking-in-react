import React, { Component } from "react";
import "./ProductRow.css";

class ProductRow extends Component {
  render() {
    console.log(this.props);
    const { name, price, stocked } = this.props.oneProduct;

    let classes = "ProductRow";
    console.log(stocked);

    if (stocked === false) {
      classes += " noStock";
    }

    return (
      <tr className={classes}>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
