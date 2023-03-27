import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable({ products }) {
  return (
    <table className='table align-middle text-center w-50'>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => <ProductRow item={product} key={product.name} />)}
        </tbody>
      </table>
  )
}
