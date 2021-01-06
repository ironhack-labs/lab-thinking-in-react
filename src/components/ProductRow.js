import React from 'react';

export default class ProductRow extends React.Component {
  render() {
    return this.props.products.map((product) => {
      if (product.stocked)
        return (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        );
      else {
        return (
          <tr key={product.id}>
            <td style={{ color: 'red' }}>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        );
      }
    });
  }
}