import React, { Component } from 'react';
import ProductRow from './ProductRow ';

class ProductTable extends Component {
  render() {
    return (
      <div className="productTable">
        <h2>Product Table</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((ele) => (
              <ProductRow product={ele} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
