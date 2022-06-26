import React from 'react';

import './ProductRow.css';

const ProductRow = ({ price, inStock, name }) => {
  console.log('inStock', inStock, name);
  return (
    <>
      <tr className="table-row">
        {inStock ? <td className="inStock">{name}</td> : <td>{name}</td>}
        <td>{price}</td>
      </tr>
    </>
  );
};

export default ProductRow;
