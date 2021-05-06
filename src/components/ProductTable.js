import React from 'react';
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
  render() {
    return (
      <div className="ProductTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
            <ProductRow products={this.props.products} />
        </table>
      </div>
    );
  }
}

export default ProductTable;
