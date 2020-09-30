import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css'

export default class ProductTable extends Component {
  render() {
    return (
      
      <div className='products'>
      <div className='titles'>
      <h3>Name</h3> <h3>Price</h3>
      </div>
        {this.props.filteredProducts.map((product) => {
          console.log(product.stocked)
          return (
            <ProductRow
              product={product}
              key={product.id}
             
            />
          );
        })}
      </div>
    );
  }
}
