import React, { Component } from 'react';
import './producttable.css';
import ProductRow from '../productrow/ProductRow';

class ProductTable extends Component {
  
  showProductRow() {
    return this.props.products
    .filter(eachProduct=>{
      if (this.props.showInStockOnly){
        return eachProduct.stocked
      } else {
        return true
      }
    })
    .map((eachProduct, index)=>{
      return (
        <ProductRow
        key = {index}
        name = {eachProduct.name}
        price = {eachProduct.price}
        inStock = {eachProduct.stocked}
        />
      )
    })
  }


  render() {
    return (
      <div className="product-table">
        <div className="container has-text-centered is-flex">
          <div className="container header is-size-5">Name</div>
          <div className="container header is-size-5">Price</div>
        </div>
        
        <div className="product-table">
          {this.showProductRow()}
        </div>
      </div>
    );
  }
}

export default ProductTable;