import React, { Component } from 'react'
import './ProductRow.css'

export default class ProductRow extends Component {

  state={
    product: this.props.product
  }

  render() {
    return (
      <React.Fragment>
      <tr className="productRow">
        <td className={(this.state.product.stocked === true ? "" : "red")}>{this.state.product.name}</td>
        <td>{this.state.product.price}</td>
      </tr>
      </React.Fragment>
    )
  }
}
