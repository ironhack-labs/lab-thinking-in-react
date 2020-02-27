import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    let products = this.props.products;
    return (
      // console.log(this.props.products)
      <table className="ProductTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <ProductRow key={idx} {...product}></ProductRow>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
