import React, { Component } from 'react';



export default class ProductRow extends Component {
  render() {
    const filteredProducts = this.props.filtered.filter((product) => {
      //console.log(`this is props query ${this.props.query}`)
      if (this.props.query === ' ') {
        product = this.props.filtered
      } else {
        //console.log(product);
        return product.name.toLowerCase().includes(this.props.query.toLowerCase())
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
