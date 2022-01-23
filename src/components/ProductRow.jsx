import React from 'react';

const ProductRow = ({name, price, category, inStock}) => {
  return (
    <tr>
    {inStock ? <td>{name}</td> : <td style={{color: 'red'}}>{name}</td> }
    <td>{price}</td>
    <td>{category}</td>

    {inStock ? <td>in Stock</td> : <td>not available</td>}
  </tr>
  )
}

export default ProductRow
