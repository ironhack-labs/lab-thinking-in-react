import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    return (
      <div className="product-columns">
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
      </div>
    )
  }
}
