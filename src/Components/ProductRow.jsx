import React, { Component } from 'react';

export class ProductRow extends Component {
  render() {
    return (
      <React.Fragment>
        <tr style={{ color: this.props.product.stocked ? 'inherit' : 'red' }}>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.category}</td>
          <td>{this.props.product.price}</td>
          <td>{this.props.product.stocked ? 'In stock' : 'Not in stock'}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default ProductRow;
