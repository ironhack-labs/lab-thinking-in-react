import React from 'react'

export default function ProductRow({product}) {
  return (
    <div style={getProductStyle(product)}>
      {product.name} | {product.price}
    </div>
  )
}

const getProductStyle = product => (product.stocked) ? ({ color: "black" }) : ({ color: "red"})