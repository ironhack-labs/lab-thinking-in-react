import React, { Component } from 'react';
import './../styles/MyProductTable.css';
import MyProductRow from './MyProductRow';
export default class MyProductTable extends Component {
  render() {
    return (
      <div className="prodTable">
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          {this.props.items.map(onedata => (
            <MyProductRow
              name={onedata.name}
              price={onedata.price}
              stocked={onedata.stocked}
            ></MyProductRow>
          ))}
        </table>
      </div>
    );
  }
}
