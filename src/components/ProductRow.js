import React from 'react'

function ProductRow(props) {
  return (
    <>
      {props.products.map((product, i) => {
        return (
          <tr key={i}>
            <td className={product.stocked ? "" : "isOutOfStock"}>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        )
      })}
     </> 
  )
}

export default ProductRow
