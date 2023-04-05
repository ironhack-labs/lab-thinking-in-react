import React from 'react'
import ProductRow from './ProductRow'

function ProductTable({ productsList }) {
  return (
    <div>
      <ProductRow productsList={productsList} />
    </div>

  )
}

export default ProductTable