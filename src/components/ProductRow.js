import React from 'react';

const ProductRow = (props) => {
  console.log(props);
  const { name, price, category, stocked } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td style={stocked ? { color: 'black' } : { color: 'red' }}>
        {stocked ? 'True' : 'False'}
      </td>
    </tr>
  );
};

export default ProductRow;
