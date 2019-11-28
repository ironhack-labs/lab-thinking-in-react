import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    console.log(this.props.products);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <ProductRow products={this.props.products} query={this.props.query} stock={this.props.stock} />
        </table>
      </div>
    );
  }
}
