import React, { Component } from 'react';
import data from '../data.json';


class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td style={{color:this.props.stocked ? "" : "red"}}>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;