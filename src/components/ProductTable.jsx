import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.filteredProducts.map((product, index) => (
              <ProductRow product={product} key={index} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
