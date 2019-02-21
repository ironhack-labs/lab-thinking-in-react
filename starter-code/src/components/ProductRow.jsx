import React, { Component } from 'react'
import Data from "../data.json"

export default class ProductRow extends Component {
  checkHandle = ( )=> {
    // this.props.handlerFunction(this.)
  }

  render() {
    return (
        <tr>
          <td style={{color:(!this.props.product.stocked) ? "red":"black"}}>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
    )
  }
}

//style={{display: (!this.props.product.stocked)? "none":"block"}}>