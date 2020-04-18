import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    const { p } = this.props
    return (
      <tr style={p.stocked ? {color: 'inherit'} : {color: 'red'}}>
        <td>{p.name}</td>
        <td>{p.price}</td>
      </tr>
    )
  }
}
