import React, { Component } from 'react';

export class ProductRow extends Component {
  state = {
    inStock: this.props.product.stocked,
  };
  render() {
    return (
      <>
        <tr style={{ color: this.state.inStock ? 'black' : 'red' }}>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      </>
    );
  }
}

export default ProductRow;
