import React from 'react';

function ProductRow({ productData }) {
  return (
    <div>
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
    </div>
  );
}

export default ProductRow;
