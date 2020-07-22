import React, { Component } from 'react';

export class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td
          d
          style={
            this.props.products.stocked === false
              ? { color: 'red' }
              : { color: 'black' }
          }
        >
          {this.props.products.name}
        </td>
        <td>{this.props.products.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
