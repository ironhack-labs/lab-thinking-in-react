import React, { Component } from "react";
import ProductRow from "./ProductRow";

export default class ProductTable extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr><th>Name</th><th>Price</th></tr>
        </thead>
        <tbody>
        {
          this.props.products.map((product, idx) => {
            return <ProductRow key={idx} {...product} />
          })
        }
        </tbody>
      </table>
    );
  }
}
