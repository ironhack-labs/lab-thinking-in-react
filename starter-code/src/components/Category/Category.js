import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.category}</h5>
      </div>
    )
  }
}
