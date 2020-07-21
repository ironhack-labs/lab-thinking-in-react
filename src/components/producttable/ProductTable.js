import React, { Component } from 'react';
import ProductRow from '../productrow/ProductRow';

export class ProductTable extends Component {
  render() {
    const productList = this.props.products
      .filter((ps) => !this.props.stock || (this.props.stock && ps.stocked))
      .filter((p) => p.name.includes(this.props.search))
      .map((item) => <ProductRow key={item.name} product={item} />);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productList}</tbody>
      </table>
    );
  }
}

export default ProductTable;
