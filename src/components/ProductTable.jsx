import React, { Component } from 'react';
import ProductRow from './ProductRow.jsx';

export default class ProductTable extends Component {
  state = {
    products: this.props.products,
  };

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
              <ProductRow products={this.props.products} />
          </tbody>
        </table>
      </div>
    );
  }
}
