import React from 'react'
import TableRow from './TableRow';

const ProductTable = ({products}) => {
  return (
    <table>
      <thead><tr><th>Name</th><th>Price</th></tr></thead>
      <tbody>
        {products.map((product, i) => (
          <TableRow product={product} key={i} />
        ))}
      </tbody>
    </table>
  )
}

export default ProductTable;
