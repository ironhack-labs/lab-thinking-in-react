import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';

class ProductTable extends Component {
  render() {
    console.log(this.props);
    return (
      <tbody>
        <tr>
          <td>Product Table</td>
        </tr>
        {this.props.products.map((oneProduct, idx) => (
          <ProductRow
            key={idx}
            {...oneProduct}
            // button={() => this.deleteProduct(oneProduct.id)}
          />
        ))}
      </tbody>
    );
  }
}

export default ProductTable;
