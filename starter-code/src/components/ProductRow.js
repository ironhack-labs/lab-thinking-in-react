import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td>
          <span
            style={{ color: this.props.stocked === false ? 'red' : 'black' }}>
            {this.props.name}
          </span>
        </td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}
export default ProductRow;
