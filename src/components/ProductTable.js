import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  state = {
    products: this.props.products,
  };

  render() {
    console.log(this.state.products);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr key={product.id}>
              <td>
                <ProductRow products={this.state.products} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
