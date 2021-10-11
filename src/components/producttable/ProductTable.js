import React, { Component } from 'react';
import ProductRow from '../productrow/ProductRow';
import './ProductTable.css';

export default class ProductTable extends Component {
  render() {
    return (
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stocked</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => {
              const { category, price, stocked, name } = product;
              return (
                <ProductRow
                  key={name}
                  category={category}
                  price={price}
                  stocked={stocked}
                  name={name}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
