import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <ProductRow data={this.props.data} />
        </table>
      </div>
    );
  }
}
