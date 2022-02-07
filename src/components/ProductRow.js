import React from 'react';

function ProductRow({ productData }) {
  return (
    <tbody>
      {productData.map((product) =>
        product.inStock ? (
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ) : (
          <tr style={{ color: 'red' }}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        )
      )}
    </tbody>
  );
}

export default ProductRow;
