import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';

export default class ProductTable extends Component {
  render() {
    const product = this.props.data;
    return (
      <div className="producttable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {product.map((el) => (
              <ProductRow key={el.id} {...el} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
