import React from 'react';

const Product = props => {
  const product = props.data;
  const color = product.stocked ? '' : 'red';
  //   console.log(product.stocked);
  return (
    <tr key={product.name} style={{ color: `${color}` }}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default Product;
