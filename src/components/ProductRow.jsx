import React from 'react'

const ProductRow = props => {
    console.log(props)
    return (
        <tr>
            <td style={{color: props.hasStock ? 'black' : 'red'}}>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}



export default ProductRow
