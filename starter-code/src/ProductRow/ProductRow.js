import React, { Component } from 'react';
import './ProductRow.css';

export default class ProductRow extends Component {
  render() {
    return (
      <React.Fragment>
        <tr className={this.props.stocked ? "ProductRow" : "ProductRowRed"}>
          <td className="name">{this.props.name}</td>
          <td className="price">{this.props.price}</td>
        </tr>
      </React.Fragment>
    );
  }
}