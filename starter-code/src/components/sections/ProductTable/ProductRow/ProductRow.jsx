import React, { Component, Fragment } from 'react'
import './ProductRow.css'

export default class ProductRow extends Component {
  
  
  
  render() {
    return (

      <Fragment>
        <td className={!this.props.stocked && "not-in-stock"}>{this.props.name}</td>
        <td>{this.props.price}</td>
      </Fragment>

    )
  }
}
