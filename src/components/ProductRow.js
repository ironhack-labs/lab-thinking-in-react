import React from 'react'

export default function ProductRow({ item }) {
  return (
    <tr>
      <td className={item.inStock ? '' : 'table-danger'}>{item.name}</td>
      <td className={item.inStock ? '' : 'table-danger'}>{item.price}</td>
      <td>{item.inStock ? 'true' : 'false'}</td>
    </tr>
  )
}
