import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
  render() {
    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((product, index) => (
            <ProductRow key={index} product={product} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
