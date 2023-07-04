import React from "react"
export default function ProductRow({product}) {

  return (
    <tr>
<td className="table-data" style={product.inStock ?  {color: ''} : { color: 'red' }}>{product.name}</td>
<td className="table-data">{product.price}</td>
</tr>
  )
}