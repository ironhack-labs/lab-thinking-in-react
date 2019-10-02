import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    return (
        <tr className="product" className={!this.props.product.stocked ? 'red product' : 'product'}>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.category}</td>
          <td>{this.props.product.price}</td>
        </tr>
    )
  }
}
