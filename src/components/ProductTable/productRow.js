import React from 'react'

const Row = (props) => {
   // console.log('estas son las props',  props)
    return (
        <tr>
            <td style={{ color: !props.product.stocked && 'red' }}>{props.product.name}</td>
        <td>{props.product.price}</td>
        
        </tr>
    )
}

export default Row