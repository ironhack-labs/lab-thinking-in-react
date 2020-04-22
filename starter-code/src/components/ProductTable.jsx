import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    const { products, searchQuery } = this.props;
    return (
      <div>
        <table className="full-table">
          <thead className="head-table">
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
            <ProductRow products={ products } searchQuery={ searchQuery } />
        </table>
      </div>
    );
  }
}

export default ProductTable;