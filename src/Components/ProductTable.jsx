import React, { Component } from 'react';
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  state = {
    products: this.props.products
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product, index) => (
              <ProductRow product={product} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable;
