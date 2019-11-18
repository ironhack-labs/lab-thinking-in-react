import React, { Component } from 'react'

export class ProductRow extends Component {
  render() {
    const product = this.props.item;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;
      // console.log("this is product name in product row. Stocked? " + this.props.item.stocked);
    return (
        <tr>
        <td>{name}</td>
        <td>{this.props.item.price}</td>
      </tr>

    )
  }
}

export default ProductRow
