import React from 'react';

const ProductRow = (props) => {
  const { product } = props;

  return (
    <>
      <div className='col-left'>{product.name}</div>
      <div className='col-right'>{product.price}</div>
    </>
  )
}

export default ProductRow;
