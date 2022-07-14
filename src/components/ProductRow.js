import React from 'react'

export default function ProductRow(props) {
  //console.log(props.productProps.name)
  return (
      <tr>
        <td className={!props.productProps.inStock ? 'red' : ''}>{props.productProps.name}</td>  
        <td>{props.productProps.price}</td>
      </tr>
  )
}
