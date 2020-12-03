import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    //console.log('products from product row: ', this.props.products);
    // console.log('products from product row: ', this.props);
    const products = this.props.filteredProducts.map(function (product) {
      return (
        <tr key={product.id}>
          <th>{product.name}</th>
          <th>{product.price}</th>
        </tr>
      );
    });
    return <>{products}</>;
  }
}
