import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    console.log(this.props.products);
    console.log(this.props.search);
    let filteredArray = this.props.products.filter((product) => {
      if (product.name.includes(this.props.search)) {
        return product;
      }
    });
    if (this.props.checked) {
      filteredArray = filteredArray.filter((product) => {
        if (product.stocked) {
          return product;
        }
      });
    }
    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>
          {filteredArray.map((product) => {
            return <ProductRow price={product.price} name={product.name} />;
          })}
        </tbody>
      </table>
    );
  }
}
