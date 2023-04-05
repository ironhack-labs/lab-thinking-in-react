import React from 'react'
import ProductRow from './ProductRow'

function ProductTable({ productsList, searchProduct }) {
  return (
    <div>
      <ProductRow productsList={productsList} searchProduct={searchProduct} />
    </div>

  )
}

export default ProductTable