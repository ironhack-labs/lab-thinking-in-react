import React from 'react'

export default function PoductRow(props) {
    return (
        <tr key={props.product.id}>
            {props.product.stocked ?
                <td>{props.product.name}</td>
                :
                <td style={{color: 'red'}}>{props.product.name}</td>
            }
            <td>{props.product.price}</td>
        </tr>
    )
}