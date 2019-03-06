import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    const product = this.props.product;

    //Ponemos EL stock de color rojo si es falso
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
