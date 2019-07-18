import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((el, index) => (
            <ProductRow key={index} {...el} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
