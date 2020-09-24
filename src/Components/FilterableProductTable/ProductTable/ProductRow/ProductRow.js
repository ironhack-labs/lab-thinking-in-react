import React from 'react';

export default function ProductRow(props) {
    console.log("2", props.product)

    return (
        <tr style={{ color: props.product.stocked ? "green" : "red" }}>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}
