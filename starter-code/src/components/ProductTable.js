import React, { Component } from 'react';
import json from '../data.json';

const ProductTable = (props) => {

  const checkIfStocked = (product) => {
    let arr = [];
    if (product.stocked === false) {
      arr.push('outofstock');
    }
    return arr.join(' ');
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {json.data.map((product, name) => {
            return (
              <tr key={name}>
                <td className={checkIfStocked(product)}>{product.name}</td>
                <td>{product.price}</td>
              </tr>)
          })}

        </tbody>
      </table>
    </div>
  )
}

export default ProductTable;