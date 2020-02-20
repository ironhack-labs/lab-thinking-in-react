import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    const products = this.props.products;
    console.log('Product Table: ', this.props);
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => {
                return <ProductRow product={product} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
