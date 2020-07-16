import React, { Component } from 'react';
import ProductRow from './ProductRow';
import { v4 as uuid } from 'uuid';

export default class ProductTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              <h5>Name</h5>
            </th>
            <th>
              <h5>Price</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((product) => (
            <ProductRow key={uuid()} product={product} />
          ))}
        </tbody>
      </table>
    );
  }
}
