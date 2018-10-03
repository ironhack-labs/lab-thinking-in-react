import React from 'react'

const ProductRow = ({name, price, stocked}) => {
  return (
    <div>
      <p className={stocked?'inStock':'outStock'}>{name}  {price}</p>
    </div>
  )

}

export default ProductRow