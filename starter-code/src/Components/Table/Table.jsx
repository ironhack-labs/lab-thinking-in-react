import React, { Component } from 'react';
import Row from '../Row/Row';

import './Table.css';

export default class Table extends Component {
  generateRows = () =>
    this.props.products.data.map((item, i) => {
      return <Row item={item} key={i} />;
    });

  render() {
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{this.generateRows()}</tbody>
        </table>
      </div>
    );
  }
}
