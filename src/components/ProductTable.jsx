//displays all the products but also shows filtered products based on the user's search

import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <ProductRow products={this.props.products} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
