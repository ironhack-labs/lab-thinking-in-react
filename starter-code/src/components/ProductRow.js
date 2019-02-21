import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    return (
      <div>
        <p style={{ color: this.props.stocked ? "black" : "red" }}>{this.props.name} {this.props.price}</p>
      </div>
    )
  }
}
