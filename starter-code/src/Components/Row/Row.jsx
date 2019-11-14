import React, { Component } from 'react';

import './Row.css';
export default class Row extends Component {
  render() {
    return (
      <tr className="row">
        {this.props.item.stocked === true && <td>{this.props.item.name}</td>}
        {this.props.item.stocked === false && (
          <td className="outOfStock">{this.props.item.name}</td>
        )}

        <td>{this.props.item.price}</td>
      </tr>
    );
  }
}
