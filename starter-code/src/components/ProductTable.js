import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    const data = this.props.data;
    console.log(data);
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {data.map(data => (
          <ProductRow data={data} />
        ))}
      </table>
    );
  }
}
