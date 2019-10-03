import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    console.log(this.props.stocked)
    return (
      <div className="product-columns">
        <p style={{color: this.props.stocked ? "green" : "red"}}>{this.props.name}</p>
        <p style={{color: this.props.stocked ? "green" : "red"}}>{this.props.price}</p>
      </div>
    )
  }
}
