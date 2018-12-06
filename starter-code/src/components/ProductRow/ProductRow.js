import React, { Component } from 'react';
import './ProductRow.css';

export default class ProductRow extends Component {
  render() {
    let hasStock = this.props.product.stocked ? '' : 'no-stock';
    
    return (
     <tr>
       <td className={hasStock}>{this.props.product.name}</td>
       <td>{this.props.product.price}</td>
     </tr>
    )
  }
}
