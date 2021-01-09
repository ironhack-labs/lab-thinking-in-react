//displays a row (table data) for each product
import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    {
      return this.props.products.map((product) => {
        return (
          <div>
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          </div>
        );
      });
    }
  }
}
