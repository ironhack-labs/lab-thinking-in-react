import React from 'react'


function ProductRow(product) {
    const { name, price, inStock } = product;
    const textColor = inStock ? 'black' : 'red';
  return (
    <div>
    <tr style={{ color: textColor }}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
    </div>
  )
}

export default ProductRow