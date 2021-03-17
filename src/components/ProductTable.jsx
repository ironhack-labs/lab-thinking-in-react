import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const rows = [];

    this.props.products.forEach((product) => {
        if(product.name.indexOf(filterText) === -1) {
            return;
        }
        if(this.props.inStockOnly && !product.stocked) {
            return
        }
        rows.push(<ProductRow product={product} key={product.name} />)
    })

    return (
      <div>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </div>
    );
  }
}

export default ProductTable;
