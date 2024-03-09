import React from 'react';

function ProductRow({ product }) {
  return (
    <div style={{
      color: product.inStock ? 'black' : 'red'
    }}>
      {product.name}
    </div>
  );
}

export default ProductRow;
