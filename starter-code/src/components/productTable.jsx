import React, { Component } from 'react';

import ProductRow from '../components/productRow';

class ProductTable extends Component {
  render() {
    return (
      <div>
        <h1>Product Table</h1>
        <ProductRow />
      </div>
    );
  }
}

export default ProductTable;
