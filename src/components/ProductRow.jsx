import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const { name, price } = this.props.product;
    return (
      <tr>
        <td>
          <h5>{name}</h5>
        </td>
        <td>
          <h5>{price}</h5>
        </td>
      </tr>
    );
  }
}
