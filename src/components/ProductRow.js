import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    console.log('those are my products', this.props.products);
    {props.products.map((product) => {
        return (
          <tr>
            <td>{product.name}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        );
      });
    }
  }
}
