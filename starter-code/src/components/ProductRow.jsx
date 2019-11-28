import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    console.log(this.props);
    const filteredProducts = this.props.products.filter(product => {
      if (product.name.toLowerCase().includes(this.props.query.toLowerCase())) {
        if (this.props.stock) {
          return product.stocked && product;
        }
        return true;
      }
    });
    return (
      <tbody>
        {filteredProducts.map((el, index) => {
          return (
            <tr key={index}>
              <td style={{ color: `${el.stocked ? 'black' : 'red'}` }}>
                {' '}
                {el.name}{' '}
              </td>
              <td>{el.price}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}
