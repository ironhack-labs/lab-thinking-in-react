import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
  render() {
    if (!this.props.product.stocked) {
      return (
        <tr>
          <td style={{ color: 'red ' }}>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      );
    }
  }
}

export default ProductRow;
