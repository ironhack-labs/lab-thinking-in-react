import React from 'react'
import ProductRow from '../ProductRow/ProductRow'

function ProductTable({ products, searchValue }) {
  return (
    <table className='table border border-dark w-75'>
      <thead className="table-secondary">
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Price</th>
        </tr>
      </thead>
      <tbody>
          {products.filter(pr => pr.name.includes(searchValue)).map((product) => <ProductRow key={product.id} {...product} />)}
      </tbody>
    </table>
  )
}

export default ProductTable