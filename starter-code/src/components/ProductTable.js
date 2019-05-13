import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductRow />
      </table>
    </div>
  )
}
