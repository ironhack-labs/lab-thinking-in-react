import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const productDetail = this.props.product;
    console.log(productDetail);
    return (
      //   <table>
      <tr>
        <th>{productDetail.name}</th>
        <th>{productDetail.price}</th>
      </tr>
      //   </table>
    );
  }
}

export default ProductRow;
