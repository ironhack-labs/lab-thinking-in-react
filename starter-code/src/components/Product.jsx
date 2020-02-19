import React from 'react';

export default function Product({ product }) {
  return (
    <tr>
      <td className={`${product.stocked ? '' : 'red'}`}>
        {product.name}
        {product.stocked ? (
          ''
        ) : (
          <>
            <br />
            <em style={{ fontSize: '.8rem' }}>(Product is not in stock)</em>
          </>
        )}
      </td>
      <td>{product.price}</td>
    </tr>
  );
}
