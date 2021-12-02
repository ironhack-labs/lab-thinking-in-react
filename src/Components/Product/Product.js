import React from 'react';

function Product(props) {
  const { product } = props;
  let classStock = product.stocked ? 'green ' : 'red ';
  // Si stocked es true green si es false red
  return (
    <div className={classStock + 'single-product'}>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default Product;
