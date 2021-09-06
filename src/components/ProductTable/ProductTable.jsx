import React from 'react';
import './ProductTable.css'

import ProductRow from '../ProductRow/ProductRow';

export default class ProductTable extends React.Component {
  render() {
    return (
      <div className="ProductTable">
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Price </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <ProductRow key={product.name} {...product} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
