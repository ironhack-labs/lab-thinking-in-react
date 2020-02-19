import React from 'react'

const TableRow = ({product}) => {
  return (
    <tr className={!!product.stocked ? "in-stock" : "out-stock"}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default TableRow;
