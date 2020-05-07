import React, { Component } from 'react';
import ProductRow from './ProductRow ';

class ProductTable extends Component {
  render() {
    const { products, search, stocked } = this.props;

    const filtered = products.filter((product) => {
      if (product.name.toLowerCase().includes(search.toLowerCase())) {
        if (stocked) {
          return product.stocked;
        } else {
          return true;
        }
      }
    });

    return (
      <div className="productTable">
        <h2>Product Table</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((ele) => (
              <ProductRow product={ele} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
