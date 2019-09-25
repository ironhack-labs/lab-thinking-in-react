import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const data = this.props.data;
    return data.stocked ? (
      <tr>
        <td>{data.name}</td>
        <td>{data.price}</td>
      </tr>
    ) : (
      <tr>
        <td class="out">{data.name}</td>
        <td class="out">{data.price}</td>
      </tr>
    );
  }
}
