import React from 'react'

const ProductRow = (props) => {
  return (
    props.products.map((product, index) => {
      return(
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      )
    })
  )
}

export default ProductRow;