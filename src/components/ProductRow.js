import React, { Component } from 'react';

export class ProductRow extends Component {
  render() {
    return (
      <tbody>
        {this.props.products.map((product) => {
          return (
            <tr key={product.id}>
              <td style={{ color: !product.stocked ? 'red' : null }}>
                {product.name}
              </td>
              <td>{product.price}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default ProductRow;
