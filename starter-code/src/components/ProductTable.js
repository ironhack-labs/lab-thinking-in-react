import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {
      return (
        <table className="ProductTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((product, index) => {
                return <ProductRow key={index} name={product.name} price={product.price} stocked={product.stocked}/>
            })}
            </tbody>
        </table>
      );
    }
  }
  
export default ProductTable;