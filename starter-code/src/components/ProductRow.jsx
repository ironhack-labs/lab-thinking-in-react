import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    return(
      <tr className="container">
        <td style={this.props.oneProd.stocked ? {color : 'black'} : {color : 'red'}}>{this.props.oneProd.name}</td>
        <td>{this.props.oneProd.price}</td>
      </tr>
    )
  }
}
