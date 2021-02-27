import React, { Component } from 'react';

export class ProductRow extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.price}</td>
        </tr>
      </tbody>
    );
  }
}

export default ProductRow;

// {"category": "Sporting Goods",
// "price": "$49.99",
// "stocked": true,
// "name": "Football",
// "id": "295a4dab-74b2-4e60-b3c2-c1346aba7585"},
