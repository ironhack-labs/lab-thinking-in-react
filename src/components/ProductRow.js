import React from 'react';
const ProductRow = (props) => {
  // console.log('product row ------product', props);
  const product = props.product;
  // console.log('+++++++++++++product', product);
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
