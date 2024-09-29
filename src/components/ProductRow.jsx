import React from 'react'

function ProductRow(props) {

  return (
    <div>
        <h3>{props.eachProduct.name}</h3>
        <p>{props.eachProduct.price}</p>

    </div>
  )
}

export default ProductRow