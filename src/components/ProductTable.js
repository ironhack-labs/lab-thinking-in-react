import ProductRow from './ProductRow';
import React from 'react';

export default class ProductTable extends React.Component {
  state = {
    products: this.props.products,
  };
  render() {
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
            <ProductRow products={this.props.products} />
          </tbody>
        </table>
      </div>
    );
  }
}