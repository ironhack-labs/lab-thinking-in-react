import React, { Component } from 'react';
import ProductRow from './productRow/ProductRow';

class ProductTable extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((elm, idx) => ( <ProductRow key={idx} {...elm} />))}
          </tbody>
        </table>
      </>
    );
  }
}

export default ProductTable;
