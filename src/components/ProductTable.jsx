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
          <ProductRow productsList={this.props.allProducts} />
        </table>
      </div>
    );
  }
}

export default ProductTable;
