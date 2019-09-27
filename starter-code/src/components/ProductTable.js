import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {

    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <ProductRow
            query={this.props.query}
            stock={this.props.stock} />
        </tbody>
      </table>

    );
  }
}

export default ProductTable
