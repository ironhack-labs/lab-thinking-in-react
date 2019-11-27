import React from 'react'

export default function ProductRow({ name, price, stocked }) {
    return (
        <tr>
            <td className={` ${stocked ? "" : "outOfStock"}`}>
                {name}
            </td>
            <td>{price}</td>
        </tr>
    )
}
