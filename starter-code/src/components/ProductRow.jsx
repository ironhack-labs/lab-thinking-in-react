import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
  render() {
    return (
      <tr className={this.props.product.stocked ? '' : 'red'}>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
