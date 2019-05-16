import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable({products, filter}) {
  return (
    <div>
      <strong>NAME | PRICE</strong>
      {products.map((p, i) => <ProductRow key={i} product={p} />)}
    </div>
  )
}
