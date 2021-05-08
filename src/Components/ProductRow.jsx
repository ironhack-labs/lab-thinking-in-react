import React from 'react'

const ProductRow = ({name, price, stocked}) => {

  return (
    <article className="product-box">
      {!stocked ? <p className="product-box-red">{name}</p> : <p>{name}</p>}
      <p>{price}</p>
    </article>
  )
}

export default ProductRow;