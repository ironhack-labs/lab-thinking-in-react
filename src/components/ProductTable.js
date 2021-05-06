import React from 'react';
import ProductRow from './ProductRow';

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
          <tbody>
            {this.props.products.map((product) => {
              return <ProductRow product={product} key={product.id} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
