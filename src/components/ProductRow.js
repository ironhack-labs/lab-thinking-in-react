/*
 * Product Row.
 */

import React from 'react';

function ProductRow(props) {
  return (
    <tbody>
      {props.products.map((product) => {
        return (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default ProductRow;
