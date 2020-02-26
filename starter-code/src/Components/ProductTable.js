import React, { Component } from "react";
import ProductRow from './ProductRow.js';
import information from '../data.json';
import "../App.css";

const products = information.data;

class ProductTable extends Component {
  render() {
    return (
      <div className="table">
          <h1> Name </h1>
          <h1> Price </h1>
          {products.map(product => <ProductRow name={product.name} price={product.price} color={product.stocked ? 'green' : 'red'}/>)}
      </div>
    );
  }
}

export default ProductTable;