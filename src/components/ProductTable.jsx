import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({ products }) => {
  return (
    <table>
      <thead style={{ backgroundColor: "lightgray" }}>
        <tr>
          <th style={{ width: 500, height: 40 }}>Name</th>
          <th style={{ width: 500, height: 40 }}>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return <ProductRow key={product.id} product={product} />
        })}
      </tbody>
    </table>

  )
}

export default ProductTable