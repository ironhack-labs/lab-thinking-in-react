import React from "react"

export default function ProductRow(props) {
    return (
        <tr>
            <td>{props.products.name}</td>
            <td>{props.products.price}</td>
        </tr>
    )
}
