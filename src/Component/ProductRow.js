import React from 'react';

const ProductRow = ({ product }) => {
  
  return (
    <tr
      key={product.index}
      style={
        product.stocked
          ? { backgroundColor: 'white' }
          : { backgroundColor: 'red' }
      }
    >
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td>{product.stocked ? 'True' : 'False'}</td>
    </tr>
  );
};

export default ProductRow;