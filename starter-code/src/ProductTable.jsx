import React, { Component } from 'react';
import ProductRow from './ProductRow';
export default class ProductTable extends Component {
  render() {
    return (
      <table>
        <thead id="thead">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((c, i) => (
            <ProductRow
              stocked={c.stocked}
              name={c.name}
              price={c.price}
              key={i}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
