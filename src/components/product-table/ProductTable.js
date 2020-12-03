import React, { Component } from 'react';
import './ProductTable.css';
import ProductRow from '../product-row/ProductRow';

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
          {this.props.product.map((el) => {
            return <ProductRow product={el} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
