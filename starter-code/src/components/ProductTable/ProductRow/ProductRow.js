import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const { product } = this.props;
    return (
      <tr className="product-row">
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
