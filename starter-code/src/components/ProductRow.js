import React, { Component } from 'react'

export default class ProductRow extends Component {
 
  render() {
    if (!this.props.products.stocked){
      return (
        <tr style={{color: 'red'}}>
        <td>{this.props.products.name}</td>
        <td>{this.props.products.price}</td>
        </tr>
        )
      }
    else{ 
      return (
      <tr>
        <td>{this.props.products.name}</td>
        <td>{this.props.products.price}</td>
      </tr>
      )
    }
    
  }
}
