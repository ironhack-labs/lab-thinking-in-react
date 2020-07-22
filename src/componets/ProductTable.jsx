import React, { Component } from 'react';
import ProductRow from './ProductRow';
import { Table } from 'reactstrap';

export class ProductTable extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product, index) => (
              <ProductRow product={product} key={index} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductTable;
