import ProductRow from './ProductRow';

import React, { Component } from 'react';

export default class ProductTable extends Component {
  render() {
    console.log(this.props.products);

    return (
      <div>
        <table>
          <thead>
            <th style={{ display: 'flex' }}>
              <tr>Name</tr>
              <tr>Price</tr>
            </th>
          </thead>
          <tbody>
            {this.props.products.map((products, i) => (
              <ProductRow
                key={i}
                price={products.price}
                stocked={products.stocked}
                name={products.name}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
