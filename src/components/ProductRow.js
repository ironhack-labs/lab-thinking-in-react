import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    // can't make this work ? as soon as intergrate the includes on line 12 it crashes
    const filteredProducts = this.props.filtered.filter((product) => {
      console.log(product);
      if (this.props.query === ' ') {
        product = this.props.filtered;
      } else {
        //console.log(product.name);
        return product.name; //.toLowerCase().includes(this.props.query.toLowerCase())
      }
    });

    const tblRow = filteredProducts.map((product) => {
      return (
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });

    return <>{tblRow}</>;
  }
}
