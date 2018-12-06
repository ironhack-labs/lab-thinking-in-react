import React, { Component } from 'react'
import './ProductRow.css'

export default class ProductRow extends Component {
  render() {
    let nameClass;
    if (this.props.hasStock)
      nameClass="has-stock";
    else
      nameClass="no-stock";

    return (
      <tr className="product-row">
            <td className={nameClass}>{this.props.name}</td>
            <td>{this.props.price}</td>            
      </tr>
    )
  }
}
