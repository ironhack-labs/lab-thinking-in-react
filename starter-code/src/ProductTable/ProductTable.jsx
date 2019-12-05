import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';

export default class ProductTable extends Component {
  constructor() {
    super();
  }

  render() {
    let list = this.props.products;
    console.log(list);
    return (
      <div className="ProductTable">
        <div>
          <span>Name       </span>
          <span>     Price</span>
        </div>
        <div>{list.map((product, idx) => {
            return(
                <ProductRow name={product.name} price={product.price}></ProductRow>
            )
        })}</div>
      </div>
    );
  }
}
