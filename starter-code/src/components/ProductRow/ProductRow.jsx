import React, { Component } from 'react';

export default class ProductRow extends Component {
  showProducts = () => {
    return this.props.data.map((eachProduct, i) => {
      return (
        <tr key={i} className={eachProduct.stocked ? 'in-stock' : 'out-of-stock' }>
          <td>{eachProduct.name}</td>
          <td>{eachProduct.price}</td>
        </tr>
      );
    });

    
  };
  render() {
    return (
      <tbody>
        {this.showProducts()}
      </tbody>
    );
  }
}
