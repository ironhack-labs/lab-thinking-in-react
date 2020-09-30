import React, { Component } from 'react';
import ProductRow from './../ProductRow/ProductRow';

export default class ProductTable extends Component {
  /** */
  render() {
    // const { data: productsInfo } = this.props.allProducts;

    const { allProducts: productsInfo } = this.props;

    return (
      <div className="product-table">
        <h3> {productsInfo[0].category}</h3>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {productsInfo.map((prod) => (
              <ProductRow product={{ ...prod }} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

/**
 <tr>
                <td> {prod.name} </td>
                <td> {prod.price} </td>
              </tr>
 <ProductRow name={prod.name} price={prod.price} />
      <ProductRow name={prod.name} price={prod.price} />

 */
