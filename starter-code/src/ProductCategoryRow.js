import React, { Component } from 'react';
import './App.css';

class ProductCategory extends Component {
  render() {
    return (
      <tr>
        <th>{this.props.category}</th>
      </tr>
    );
  }
}

export default ProductCategory;