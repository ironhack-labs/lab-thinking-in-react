import React, { Component } from 'react';
import './ProductRow.css';

export default class ProductRow extends Component {
  render() {
    const { category, price, stocked, name } = this.props;
    return (
      <tr className={`product-row ${!stocked && 'highlighted'}`}>
        <td>{category}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <input type="checkbox" defaultChecked={stocked} />
        </td>
      </tr>
    );
  }
}
