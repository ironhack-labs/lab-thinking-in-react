import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>NAME</td>
              <td>CATEGORY</td>
              <td>PRICE</td>
              <td>STOCK</td>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product, index) => (
              <ProductRow product={product} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
