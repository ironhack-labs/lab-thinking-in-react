import React, { Component } from 'react';
import './ProductTable.css';
import ProductRow from './ProductRow/ProductRow'

export default class ProductTable extends Component {
  render() {
    return (
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          {this.props.products.map((product, id) => {
              return <ProductRow key={id} product={product}/>
          })}
        </table>
      </div>
    );
  }
}
