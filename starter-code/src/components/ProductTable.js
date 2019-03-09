import React, { Component } from 'react';

import ProductRow from '../components/ProductRow.js';
import json from '../data.json';

class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name {this.props.searchquery}</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {json.data.filter(product => {
              return new RegExp(this.props.searchquery, 'i').test(product.name);
            }).map(product => {
              return ( 
                <ProductRow key={product.name} name={product.name} price={product.price} stocked={product.stocked} />
              );
            })}
            </tbody>
        </table>



      </div>
    );
  }
}

export default ProductTable;