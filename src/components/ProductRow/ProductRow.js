import React from 'react'

export default function ProductRow(props) {
    return (
        <tr>
            <td style={{ color: `${props.product.stocked ? 'black' : 'red'}` }}>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}
