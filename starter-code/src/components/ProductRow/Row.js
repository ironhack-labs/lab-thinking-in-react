import React, { Component } from "react";

export default class Row extends Component {
  render() {
    return (
        <tr className="row">
     
        {this.props.product.stocked && <td> {this.props.product.name} </td>}

        {!this.props.product.stocked && <td style={{color:"red"}}> {this.props.product.name} </td>}

        <td>{this.props.product.price}</td>
     
      </tr>
    );
  }
}
