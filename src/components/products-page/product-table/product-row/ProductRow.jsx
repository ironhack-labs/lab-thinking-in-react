import React from 'react'
import './ProductRow.css'

function ProductRow(props) {

  const { name, price, id } = props

  return (
    <>
              <td>{name}</td>
              <td>{price}</td>
    </>
  )
}

export default ProductRow