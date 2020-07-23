import React, { Component } from 'react';

export class ProductRow extends Component {
  render() {
    return (
      <div>
        <tr>
          <td
            style={
              this.props.product.stocked ? { color: 'black' } : { color: 'red' }
            }
          >
            {this.props.product.name}
          </td>
          <td>{this.props.product.price}</td>
        </tr>
      </div>
    );
  }
}

export default ProductRow;
