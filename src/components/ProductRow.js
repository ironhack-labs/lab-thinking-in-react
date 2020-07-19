import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const filteredProducts = this.props.filtered.filter((product) => {
      //console.log(`this is props query ${this.props.query}`)
      if (this.props.query === ' ') {
        product = this.props.filtered;
      } else {
        console.log(this.props.query);
        console.log(this.props.onStock);
        //console.log(this.product.id)
        console.log(`this is product stocked${product.stocked}`);
        return (
          product.name.toLowerCase().includes(this.props.query.toLowerCase()) &&
          (product.stocked === this.props.onStock || !this.props.onStock)
        );
      }
    });

    const tblRow = filteredProducts.map((product) => {
      return (
        <tr style={{ color: product.stocked ? 'black' : 'red' }}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });

    return <>{tblRow}</>;
  }
}
