import React from 'react'
import ProductRow from './ProductRow'

function ProductTable({ productsList, searchProduct, showInStock, handleInStock }) {
  return (
    <div>
      <ProductRow productsList={productsList} searchProduct={searchProduct} showInStock={showInStock} handleInStock={handleInStock} />
    </div>

  )
}

export default ProductTable