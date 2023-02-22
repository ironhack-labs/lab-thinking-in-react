import React from 'react'
import ProductRow from './ProductRow'

const ProductsTable = ({ products }) => {
  return (
    <table className='table mt-5'>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => <ProductRow key={product.id} product={product}/>)}
      </tbody>
    </table>
  )
}

export default ProductsTable