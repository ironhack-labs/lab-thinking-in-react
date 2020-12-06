import React from 'react'

export default function ProductRow(props) {

    return (
            <tr style={{color: props.product.stocked ? "black" : "red" }}>
                <td>{props.product.name}</td>
                <td>{props.product.price}</td>
            </tr>
        
    )
}

