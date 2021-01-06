import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    return this.props.products.map((product) => {
      return (
        <tr key={product.id}>
          <td style={{ color: product.stocked ? 'black' : 'red' }}>
            {product.name}
          </td>
          <td>{product.price}</td>
        </tr>
      );
    });
  }
}
