import React from 'react'

export default function ProductRow({
    category,
    price,
    stocked,
    name,
    color
}) {
    return (
        <tr style={{color:`${color}`}}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}
