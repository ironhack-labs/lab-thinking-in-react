import React, { Component } from 'react';

import './ProductRow.css';

class ProductRow extends Component {
  render() {
    return (
      <tr>
        {this.props.product.stocked ? (
          <td>{this.props.product.name}</td>
        ) : (
          <td className="out-of-stock">{this.props.product.name}</td>
        )}
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
