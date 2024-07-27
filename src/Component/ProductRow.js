import goodsData from '../data.json'
import React, { useState } from 'react'

function ProductRow(props) {
   

  return (
    
        <tr>
                <td>{props.oneProduct.name}</td>
                <td>{props.oneProduct.price}</td>
            </tr>
    
   
  )
}

export default ProductRow