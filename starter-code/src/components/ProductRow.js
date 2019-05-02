import React, { Component } from 'react'
import './ProductRow.css';

export default class ProductRow extends Component {
  render() {
    return (
      <div className="product-row">
      

        <h3>{this.props.name}</h3>
        <p>{this.props.price}</p>
      </div>
    )
  }
}
