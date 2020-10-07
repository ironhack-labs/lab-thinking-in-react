import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {

  render() {
    const allProducts = this.props.productList.data;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th> <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, index) => {
              return (
                <ProductRow
                  key={index}
                  productName={product.name}
                  productPrice={product.price}
                  productStock={product.stocked}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
