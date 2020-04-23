import React, { Component } from 'react';

export default class ProductRow extends Component {
    
  render() {
    const { products } = this.props;
    const stockedProduct = products.data.filter(item => item.stocked === true);
    return (
      <div>
       <tr>
        <td>{products.data.name}</td>
        <td>{products.data.price}</td>
      </tr>
      </div>
    );
  }
}