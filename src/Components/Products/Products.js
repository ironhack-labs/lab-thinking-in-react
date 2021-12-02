import React from 'react';
import Product from '../Product/Product';

function Products({ products }) {
  return (
    <div style={{ width: '50%' }}>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}

export default Products;
