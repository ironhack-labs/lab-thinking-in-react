import React, { Component } from 'react';
import ProductInfo from './ProductInfo.js';

export default class ProductTable extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {product.map((el, index) => (
            <ProductInfo
              key={index}
              name={el.name}
              price={el.price}
              stocked={el.stocked}
            />
          ))}
        </table>
      </div>
    );
  }
}
