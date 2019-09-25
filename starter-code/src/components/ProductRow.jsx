import React, { Component } from 'react';
import './ProductRow.css';

export default class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td className={(!this.props.stocked && 'red-text') || 'text'}>
          {this.props.name}
        </td>
        <td className={(!this.props.stocked && 'red-text') || 'text'}>
          {this.props.name}
        </td>
      </tr>
    );
  }
}
