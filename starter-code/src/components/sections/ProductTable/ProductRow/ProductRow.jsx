import React, { Component, Fragment } from 'react'
import './ProductRow.css'

export default class ProductRow extends Component {
  
  constructor(props) {
    super();

    this.state = {
      product: props.product
    }
  }
  
  render() {
    return (

      <Fragment>
        <td className={!this.state.product.stocked && "not-in-stock"}>{this.state.product.name}</td>
        <td>{this.state.product.price}</td>
      </Fragment>

    )
  }
}
