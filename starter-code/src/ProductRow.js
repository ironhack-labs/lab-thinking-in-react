import React from 'react'

export default class ProductRow extends React.Component{
  render(){
    return(
      <tr>
        <th>{this.props.productName.name}</th>
        <th>{this.props.productName.price}</th>
      </tr>
    )
  }
}