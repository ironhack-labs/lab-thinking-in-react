import React, { Component } from 'react';
import './App.css';

class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td className={this.props.class} id={this.props.id}>{this.props.name}</td><td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;