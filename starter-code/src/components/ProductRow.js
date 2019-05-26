import React from 'react'
import '../App.css'

export default (props) => (
  <tr >
      <th>{props.index}</th>
      <td className={" " + (!props.product.stocked ? 'red' : '')}>{props.product.name}</td>
      <td >{props.product.price}</td>
  </tr>
)