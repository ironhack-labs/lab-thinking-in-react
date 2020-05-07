import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow.js';

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <ProductRow data={this.props.data} search={this.props.search} />
          </tbody>
        </table>
      </div>
    );
  }
}
