import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <ProductRow product={product} key={product.id} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
