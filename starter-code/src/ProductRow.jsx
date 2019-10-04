import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    
    return (
      <tr>
        <td style={this.props.stocked ? {color: "#000000"} : {color: "red"}}>
          {this.props.name}
        </td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}
