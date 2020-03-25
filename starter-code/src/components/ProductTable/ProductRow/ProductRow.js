import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const { product } = this.props;
    return (
      <tbody className="product-row">
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      </tbody>
    );
  }
}
