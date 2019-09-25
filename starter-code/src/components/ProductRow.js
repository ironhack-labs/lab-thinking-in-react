import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const data = this.props.data;
    return (
      <tr>
        {data.stocked ? <td>{data.name}</td> : <td class="out">{data.name}</td>}
        {data.stocked ? (
          <td>{data.price}</td>
        ) : (
          <td class="out">{data.price}</td>
        )}
      </tr>
    );
  }
}
