import React from 'react'

export default function ProductRow( {product} ) {
  return (
    <tr>
{/* the ternerary statement below states: if product.instock then keep font color the same, else font color= red */}
<td className="table-data" style={product.inStock ? {color: ""} : {color: "red"}}>{product.name} </td>
<td className='table-data'>{product.price} </td>
    </tr>
  )
}
