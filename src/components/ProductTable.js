import React, { Component } from 'react';
import Row from './Row';

export default class ProductTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <Row data={this.props.data} filter={this.props.filter} />
      </table>
    );
  }
}
