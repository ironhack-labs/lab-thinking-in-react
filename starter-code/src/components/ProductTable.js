import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {

  render() {
    return (
      <div className="producttable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

            {this.props.parentCallback.map((product, index) => {
              return <ProductRow key={index} {...product} />;
            })}
            
          </tbody>
        </table>
      </div>
    );
  }
}