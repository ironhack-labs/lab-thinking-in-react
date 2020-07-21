import React from 'react';

const ProductRow = (props) => {
  const { name, price, category, stocked } = props;
  return (
    <tr style={stocked ? { color: 'black' } : { color: 'red' }}>
      <td>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>{stocked ? 'True' : 'False'}</td>
    </tr>
  );
};

export default ProductRow;
