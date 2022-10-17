import React from 'react'

const ProductRow = (props) => {
    const { name, price, inStock } = props
    
  return (
    
    <tr>
        <td>&nbsp;</td>
        {inStock ? 
        <td>{name}</td> 
        : 
        <td style={{color:'red'}}>{name}</td>

        }
        <td>{price}</td>
    </tr>
    
  )
}

export default ProductRow