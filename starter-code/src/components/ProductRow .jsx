import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const { name, stocked, price } = this.props.product;
    return (
      <tr key={name}>
        <td style={{ color: stocked ? 'black' : 'red' }}>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
