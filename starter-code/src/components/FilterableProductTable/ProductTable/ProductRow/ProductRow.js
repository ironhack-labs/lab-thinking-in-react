import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}


