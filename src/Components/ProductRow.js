import React from 'react'

export const ProductRow = (props) => {
    const {name,price,inStock}= props
  return (
        <tr>
            {inStock? <td >{name}</td>:<td  style={{"color":"red"}}>{name}</td>}
            <td >{price}</td>
        </tr>
  )
}
