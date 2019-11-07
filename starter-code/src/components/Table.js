import React, { Component } from 'react';
import Row from './Row';

class Table extends Component {
  render() {
    const { products } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return <Row key={index} {...product} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
