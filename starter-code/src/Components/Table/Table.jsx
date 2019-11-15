import React, { Component } from 'react';
import Row from '../Row/Row';

import './Table.css';

export default class Table extends Component {
  generateRows = category => {
    console.log('entered rows');
    let blah = this.props.products.data.map((item, i) => {
      if (item.category === category) {
        return <Row item={item} key={i} />;
      }
    });
    blah.unshift(
      <thead colspan="2">
        <td>{category}</td>
      </thead>
    );
    return blah;
  };

  generateHeaders = () => {
    let headers = [];
    this.props.products.data.forEach(header => {
      if (!headers.includes(header.category)) {
        headers.push(header.category);
      }
    });
    return headers.map((item, i) => {
      console.log(item);
      return this.generateRows(item);
    });
  };
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
          <tbody>
            {this.generateHeaders()}
            {/* {this.generateRows()} */}
          </tbody>
        </table>
      </div>
    );
  }
}
