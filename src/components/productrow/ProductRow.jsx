import React from 'react';

function ProductRow(props) {
  const { id, name, price, stocked } = props;
  // console.log(props);
  return (
    <tr key={id} style={{ color: stocked === true ? 'inherit' : 'red' }}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
