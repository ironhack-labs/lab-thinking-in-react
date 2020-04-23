import React, { Component } from 'react';

export default class productInfo extends Component {
  render() {
    const { name, price, stocked } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}
