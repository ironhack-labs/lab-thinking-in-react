import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable({ products }) {
  return (
    <div className='flex justify-center'>
      <table className='table-auto mx-7'>
        <thead>
          <tr>
            <th className='w-32'>Name</th>
            <th className='w-32'>Price</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {products.map((product) => (<ProductRow key={product.id} name={product.name} price={product.price} inStock={product.inStock}/>))}
        </tbody>
      </table>
    </div>
  )
}
