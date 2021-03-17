import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
            return;
          }
          if (inStockOnly && !product.stocked) {
            return;
          }
      rows.push(<ProductRow product={product} key={product.name} />);
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
