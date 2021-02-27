import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
          </thead>
        </table>
      </div>
    );
  }
}

export default ProductTable;
