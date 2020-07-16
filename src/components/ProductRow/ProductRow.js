import React from 'react';

const ProductRow = ({ name, price }) => {
  return (
    <>
      <p>{name}</p>
      <p>{price}</p>
    </>
  );
};

export default ProductRow