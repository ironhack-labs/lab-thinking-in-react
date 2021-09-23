import React from 'react'
import './ProductRow.css'

const ProductRow = ({ category, price, stocked, name, id }) => {

  return (
    <div>
      <p> {stocked ? name : <span className="outOfStock">{name} - {price}</span>}</p>
    </div>
  )
}


export default ProductRow;