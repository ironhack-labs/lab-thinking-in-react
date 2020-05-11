import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    const filteredProducts = this.props.products.filter((product) => {
      //console.log('products before filter:', product);
      return product.name
        .toLowerCase()
        .includes(this.props.search.toLowerCase())
        ? true
        : false;
    });

    return (
      <table className="table-container">
        <thead>
          <tr className="table-head">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.name} className="product-row-container">
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
          {/* {filteredProducts.map((product) => (
            <ProductRow products={this.props.products} />
          ))} */}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
