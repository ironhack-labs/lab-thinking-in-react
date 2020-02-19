import React from 'react'

export default function ProductRow({product}) {

    function getColor(stocked) {
        return stocked ? "black" : "red"
    }

    return (
        <tr>
            <td style={{color:`${getColor(product.stocked)}`}}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}