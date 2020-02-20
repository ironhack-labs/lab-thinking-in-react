import React from 'react'

export default function ProductRow({
    name,
    price,
    index,
    stocked
}) {
    return (
        <tr key={index} className={(!stocked ? "notAvailable" : "available")}>
            <td>
                {name}
            </td>
            <td>
                {price}
            </td>
        </tr>
    )
}
