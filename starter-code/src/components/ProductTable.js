import React, { Component } from "react";
import ProductRow from "./ProductRow"

export default class ProductTable extends Component {
  render() {
    let products = this.props.products
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => {
            return <ProductRow key={idx} {...product} />
          })}
        </tbody>
      </table>
    );
  }
}
