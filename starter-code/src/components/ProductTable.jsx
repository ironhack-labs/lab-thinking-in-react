import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {this.props.products.map(item => (
            <ProductRow
              name={item.name}
              price={item.price}
              stocked={item.stocked}
            />
          ))}
        </table>
      </div>
    );
  }
}
