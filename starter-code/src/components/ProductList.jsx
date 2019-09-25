import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';
import ProductItem from './ProductItem';

export class ProductList extends Component {
  render() {
    const filter = this.props.filterProductList;
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filter.map(product => (
              <ProductItem product={product} key={product.name} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductList;
