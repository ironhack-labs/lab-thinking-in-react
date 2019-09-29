
import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            <ProductRow
              products={this.props.products}
              search={this.props.search}
              checkState={this.props.checkState}
            />
          </tbody>
        </table>
      </div>
    );
  }
}