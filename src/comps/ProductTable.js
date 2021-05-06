// imports
import React from 'react';
import ProductRow from './ProductRow';

// component
class ProductTable extends React.Component {
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
          <ProductRow filteredProducts={this.props.products} />
        </table>
      </div>
    );
  }
}

//export
export default ProductTable;
