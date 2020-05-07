import React, { Component } from 'react';
import ProductRow from './productRow/ProductRow';

class ProductTable extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <table className="my-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={'2'} className="special-row">
                Sporting Goods
              </td>
            </tr>
            {this.props.products
              .filter((elm) => elm.category === 'Sporting Goods')
              .map((elm, idx) => (
                <ProductRow key={idx} {...elm} />
              ))}
            <tr>
              <td colSpan={'2'} className="special-row">
                Electronics
              </td>
            </tr>
            {this.props.products
              .filter((elm) => elm.category === 'Electronics')
              .map((elm, idx) => (
                <ProductRow key={idx} {...elm} />
              ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default ProductTable;
