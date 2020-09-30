import React, { Component } from 'react';
import './ProductTable.css';

export default class ProductTable extends Component {
  state = {
    products: this.props,
  };
  render() {
    return (
      <div className="product-container">
        <h1>Products</h1>
        <div className="products-table">
          {this.props.filtered.map((element) => {
            return (
              <div key={element.id}>
                <div className="products">
                  <div>{element.name}</div>
                  <div>{element.price}</div>
                </div>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
