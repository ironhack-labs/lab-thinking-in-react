import React from 'react';

function ProductRow({ product }) {
  if (product.stocked) {
    return (
      <tr className="table__rows">
        <td className="table__cells">{product.name}</td>
        <td className="table__cells">{product.price}</td>
      </tr>
    );
  } else {
    return (
      <tr className="table__rows">
        <td className="table__cells red">{product.name}</td>
        <td className="table__cells red">{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
