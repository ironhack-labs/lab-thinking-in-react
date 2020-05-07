import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const { product } = this.props;
    let productStocked = {
      // if stocked is true normal color otherwise (false) red | Bonus Iteration 2
      color: product.stocked ? ' ' : 'red',
    };
    return (
      <tr>
        <td style={productStocked}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
