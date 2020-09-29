import React from 'react'
import 'bulma/css/bulma.css'

const ProductRow = (props) => {
  const { product } = props;

  return (
    <tr key={product.id} className='has-text-centered'>
      <td style = {product.stocked ? { color: 'inherit' } : {color: 'red'}} >{product.name}</td>
      <td style = {product.stocked ? { color: 'inherit' } : {color: 'red'}}>{product.price}</td>
    </tr>
  )
}

export default ProductRow;
