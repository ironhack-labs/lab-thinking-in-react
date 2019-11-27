import React from 'react'

export default function ProductRow({name, price, stocked}) {
    return (
        <tr>
            <td className= {!stocked ? "isRed" : "isNormal"}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

