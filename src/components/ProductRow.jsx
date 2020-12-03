import React from 'react';

const ProductRow = (props) => {
  console.log('Data in ProductRow: ', props);
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
