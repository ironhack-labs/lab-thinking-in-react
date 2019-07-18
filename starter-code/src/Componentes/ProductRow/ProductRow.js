import React, { Component } from 'react'
import './ProductRow.css'

export default class ProductRow extends Component {
  render() {
    return (
      <React.Fragment>
      <tr className="productRow">
        <td className={(this.props.product.stocked === true ? "" : "red")}>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
      </React.Fragment>
    )
  }
}
