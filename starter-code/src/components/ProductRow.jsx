import React from 'react'

export default function ProductRow({
    name,
    price
}) {
    return (
        <React.Fragment>
            <td>{name}</td>
            <td>{price}</td>
        </React.Fragment>
    )
}
