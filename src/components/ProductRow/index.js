import React from 'react'

const ProductRow = (props) => {
  const { name, price, inStock } = props;
  return (
    <tr>
      {inStock ? <td>{name}</td> : <td className='prod-out'>{name}</td>}
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;