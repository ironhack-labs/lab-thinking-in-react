import React from 'react'

export default function ProductRow(props) {
    let col="black"
    !props.product.stocked ? col="red" : col="green"
        return (
        <tr key={props.id} style={{ color: `${col}`}}>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr> 
        ) 
}