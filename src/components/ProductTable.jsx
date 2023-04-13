import React from 'react'
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {products.map((product) => {
          return <ProductRow key={product.id} product={product} />
        })}
      </tbody>
    </table>
  )
}

export default ProductTable