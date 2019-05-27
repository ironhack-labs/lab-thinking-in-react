import React from 'react'

const ProductRow = ({product}) => {

  const productClass = product.stocked ? "item-table": "item-table red"

  return (
  <div className="row-table">
    <p className={productClass}>{product.name}</p><p className="item-table">{product.price}</p>
  </div>
  )
}

export default ProductRow