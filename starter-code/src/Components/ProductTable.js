import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className='product-table'>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody> <ProductRow products={products}/></tbody>
      </table>
      </div>
    );
  }
}

