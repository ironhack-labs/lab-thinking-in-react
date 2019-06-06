import React from "react"


const ProductRow = ({ price, stocked, name }) => {
  return (

    <div className="container">

      <div>{name}</div>
      <div>{price}</div>

    </div>

  )
}

export default ProductRow