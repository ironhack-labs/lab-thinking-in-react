import React, { Component } from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow';

export default class SearchBarProductTable extends Component {
  render() {
    return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow />
        <ProductRow />
        <tr>
            <td colSpan="2">Electronics</td>
        </tr>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>February</td>
          <td>$80</td>
        </tr>
      </tbody>
    </table>
    )
  }
}
