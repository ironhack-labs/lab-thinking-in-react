import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    
    const prods = this.props.products.map(x => {
      return <ProductRow key={x.name} product={x} />;
    });

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {prods}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
