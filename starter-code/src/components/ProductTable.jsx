import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
      const productList = this.props.data.data;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productList.map(product => (
              <ProductRow product = {product} key = {product.name}/>

          )
          )}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;