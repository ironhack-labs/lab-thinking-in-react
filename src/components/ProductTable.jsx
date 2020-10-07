import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  displayProduct() {
    let products = [];
    const data = this.props.products;
    data.map((item) => products.push(<ProductRow key={item.id} product={item} />));
    return products;
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
            <tbody>{this.displayProduct()}</tbody>
      </table>
    );
  }
}

export default ProductTable;
