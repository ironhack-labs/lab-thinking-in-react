import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';

export default class ProductTable extends Component {
  render() {
    let productList = this.props.payLoad;
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
            {/* <ProductRow payLoad={productList}></ProductRow> */}
            {this.props.payLoad.map((element, idx) => {
              return <ProductRow key={idx} rowPayLoad={element}></ProductRow>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
