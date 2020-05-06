import React, { Component } from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css';

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
          {this.props.data.map((product, index) => (
            <ProductRow key={index} product={product} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
