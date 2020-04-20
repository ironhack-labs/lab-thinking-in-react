import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
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
            <ProductRow />
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;