import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    return (
      <tr>
        {!this.props.stocked ? (
          <td class="out-of-stock">
            {this.props.name}
            <span
              className="new badge red"
              data-badge-caption="Out of stock"
            ></span>
          </td>
        ) : (
          <td>{this.props.name}</td>
        )}

        <td>{this.props.price}</td>
        <td>{this.props.category}</td>
      </tr>
    );
  }
}
