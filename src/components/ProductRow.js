import React from 'react';

export const ProductRow = ({ name, price }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};
