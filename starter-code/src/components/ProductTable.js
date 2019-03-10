import React, { Component } from 'react';
import json from '../data.json';

class ProductTable extends Component {

  checkIfStocked = (product) => {
    let arr = [];
    if (product.stocked === false) {
      arr.push('outofstock');
    }
    return arr.join(' ');
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name {this.props.searchquery}</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {json.data.filter(product => {
              return new RegExp(this.props.searchquery, 'i').test(product.name);
            }).map((product, name) => {
              return (
                <tr key={name}>
                  <td className={this.checkIfStocked(product)}>{product.name}</td>
                  <td>{product.price}</td>
                </tr>)
            })}

          </tbody>
        </table>
      </div>
    )
  }
}





export default ProductTable;