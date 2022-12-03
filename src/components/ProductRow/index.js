import React from 'react'

const ProductRow = ({name, price, inStock}) => {
  return (
    <tr>
      {inStock ? <td>{name}</td> : <td style={{color: 'red'}}>{name}</td>}
      <td>{price}</td>
    </tr>
  )
}

export default ProductRow