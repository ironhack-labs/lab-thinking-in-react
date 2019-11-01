import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    console.log(this.props.productsToShow);
    return (
      <table align="center">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
          {this.props.productsToShow.map((product, idx) => (
            <ProductRow key={idx} toDisplay={product} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
