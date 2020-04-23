import React, { Component } from 'react';
import ProductRow from './ProductRow'



class ProductTable extends Component {
  render() {
    const { products } = this.props;
    return (
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { products.map((product, i) => {
              return <ProductRow key={i} name={product.name} price={product.price} stocked={product.stocked}/>
            })}
          </tbody>
      </table>
    );
  }
}


export default ProductTable;