import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    console.log('this is props in product table: ', this.props);
    const filteredProducts = this.props.products.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(this.props.query.toLowerCase()); //contain whatever is in query
    });

    
    const inStockProducts = filteredProducts.filter((product) => {
      if (product.stocked === true) {
      return inStockProducts;
    }  
  })
    
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow
            products={this.props.products}
            filteredProducts={filteredProducts}
            inStockProducts ={inStockProducts}
          />
        </tbody>
      </table>
    );
  }
}
